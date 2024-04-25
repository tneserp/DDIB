package com.ddib.gateway.controller; // 패키지 선언: com.ticket.flow.controller 패키지

import com.ddib.gateway.dto.AllowedUserResponse;
import com.ddib.gateway.dto.RankNumberResponse;
import com.ddib.gateway.dto.RegisterUserResponse;
import com.ddib.gateway.service.UserQueueService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.time.Duration;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/queue")

public class UserQueueController { // UserQueueController 클래스 선언

    private final UserQueueService userQueueService; // UserQueueService 주입

    // 대기 등록
    @PostMapping("") // POST 요청 매핑
    public Mono<RegisterUserResponse> registerUser(@RequestParam(name = "queue", defaultValue = "default") String queue, // 대기열 이름 받아옴 (기본값: default)
                                                   @RequestParam(name = "user_id") Long userId) { // 사용자 ID 받아옴
        return userQueueService.registerWaitQueue(queue, userId) // UserQueueService의 대기열 등록 메서드 호출
                .map(RegisterUserResponse::new); // 등록된 사용자 응답으로 매핑
    }

    // 허용 가능한 사용자인지 확인
    @GetMapping("/allowed") // GET 요청 매핑
    public Mono<AllowedUserResponse> isAllowedUser(@RequestParam(name = "queue", defaultValue = "default") String queue, // 대기열 이름 받아옴 (기본값: default)
                                                   @RequestParam(name = "user_id") Long userId, // 사용자 ID 받아옴
                                                   @RequestParam(name = "token") String token) { // 토큰 받아옴
        return userQueueService.isAllowedByToken(queue, userId, token) // 토큰으로 사용자 허용 여부 확인
                .map(AllowedUserResponse::new); // 사용자 허용 응답으로 매핑
    }

    @GetMapping("/rank") // GET 요청 매핑
    public Mono<RankNumberResponse> getRankUser(@RequestParam(name = "queue", defaultValue = "default") String queue, // 대기열 이름 받아옴 (기본값: default)
                                                @RequestParam(name = "user_id") Long userId) { // 사용자 ID 받아옴
        return userQueueService.getRank(queue, userId) // 사용자의 순위 조회
                .map(RankNumberResponse::new); // 순위 응답으로 매핑
    }

    @GetMapping("/touch") // GET 요청 매핑
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
