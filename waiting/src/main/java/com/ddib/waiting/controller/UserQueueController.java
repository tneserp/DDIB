package com.ddib.waiting.controller; // 패키지 선언: com.ticket.flow.controller 패키지

import com.ddib.waiting.dto.AllowedUserResponse;
import com.ddib.waiting.dto.RankNumberResponse;
import com.ddib.waiting.dto.RegisterUserResponse;
import com.ddib.waiting.service.UserQueueService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpCookie;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.result.view.Rendering;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.time.Duration;

@RequiredArgsConstructor
@Controller
@RequestMapping("/api/v1/queue")

public class UserQueueController { // UserQueueController 클래스 선언

    private final UserQueueService userQueueService; // UserQueueService 주입

    @GetMapping("")
    public Mono<Rendering> waitingRoomPage(@RequestParam(name = "queue", defaultValue = "default") String queue,
                                           @RequestParam(name = "user_id") Long userId,
                                           @RequestParam(name = "redirect_url") String redirectUrl,
                                           ServerWebExchange exchange) {
        String key = "user-queue-%s-token".formatted(queue);
        HttpCookie cookieValue = exchange.getRequest().getCookies().getFirst(key);
        String token = cookieValue == null ? "" : cookieValue.getValue();

        // 1. 입장이 허용되어 page redirect(이동)이 가능한지?
        return userQueueService.isAllowedByToken(queue, userId, token)
                .filter(allowed -> allowed)
                .flatMap(allowed -> Mono.just(Rendering.redirectTo(redirectUrl).build()))
                .switchIfEmpty(
                        // 대기 등록. 이미 있으면 웹 페이지에 필요한 데이터 전달
                        userQueueService.registerWaitQueue(queue, userId)
                                .onErrorResume(ex ->userQueueService.getRank(queue, userId))
                                .map(rank -> Rendering.view("waiting-room.html")
                                        .modelAttribute("number", rank)
                                        .modelAttribute("userId", userId)
                                        .modelAttribute("queue", queue)
                                        .build())
                );
    }

    // 허용 가능한 사용자인지 확인
    @GetMapping("/allowed") // GET 요청 매핑
    @ResponseBody
    public Mono<AllowedUserResponse> isAllowedUser(@RequestParam(name = "queue", defaultValue = "default") String queue, // 대기열 이름 받아옴 (기본값: default)
                                                   @RequestParam(name = "user_id") Long userId, // 사용자 ID 받아옴
                                                   @RequestParam(name = "token") String token) { // 토큰 받아옴
        return userQueueService.isAllowedByToken(queue, userId, token) // 토큰으로 사용자 허용 여부 확인
                .map(AllowedUserResponse::new); // 사용자 허용 응답으로 매핑
    }

    @GetMapping("/rank") // GET 요청 매핑
    @ResponseBody
    public Mono<RankNumberResponse> getRankUser(@RequestParam(name = "queue", defaultValue = "default") String queue, // 대기열 이름 받아옴 (기본값: default)
                                                @RequestParam(name = "user_id") Long userId) { // 사용자 ID 받아옴
        return userQueueService.getRank(queue, userId) // 사용자의 순위 조회
                .map(RankNumberResponse::new); // 순위 응답으로 매핑
    }

    @GetMapping("/touch")
        // GET 요청 매핑
    Mono<?> touch(@RequestParam(name = "queue", defaultValue = "default") String queue, // 대기열 이름 받아옴 (기본값: default)
                  @RequestParam(name = "user_id") Long userId, // 사용자 ID 받아옴
                  ServerWebExchange exchange) { // ServerWebExchange 객체 받아옴
        // SeverWebExchange -> HttpServletRequest와 HttpServletResponse를 대체하는 역할
        return Mono.defer(() -> userQueueService.generateToken(queue, userId)) // 토큰 생성
                .map(token -> {
                    exchange.getResponse().addCookie( // 쿠키 생성 및 응답에 추가
                            ResponseCookie
                                    .from("user-queue-%s-token".formatted(queue), token) // 쿠키 이름 및 값 설정
                                    .maxAge(Duration.ofSeconds(300)) // 쿠키 유효 기간 설정
                                    .path("/") // 쿠키 경로 설정
                                    .build()
                    );

                    return token; // 생성된 토큰 반환
                });
    }
}
