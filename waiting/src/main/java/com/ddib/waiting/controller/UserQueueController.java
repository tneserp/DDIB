package com.ddib.waiting.controller;

import com.ddib.waiting.dto.AllowedUserResponse;
import com.ddib.waiting.dto.RankNumberResponse;
import com.ddib.waiting.service.UserQueueService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpCookie;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/queue")
@Slf4j
public class UserQueueController { // UserQueueController 클래스 선언

    private final UserQueueService userQueueService; // UserQueueService 주입

    @GetMapping("")
    public Mono<?> waitingRoomPage(@RequestParam(name = "queue", defaultValue = "default") String queue,
                                   @RequestParam(name = "user_id") Long userId, ServerWebExchange exchange) {

        log.info("========ADD=======");
        log.info(String.valueOf(userId));
        log.info("=====================");

        // 쿠키 키 생성
//        String key = "user-queue-%s-token".formatted(queue);
        // 요청에서 해당 키의 쿠키값 가져오기
//        HttpCookie cookieValue = exchange.getRequest().getCookies().getFirst(key);
        // 쿠키값이 존재하지 않으면 빈 문자열로 초기화
//        String token = cookieValue == null ? "" : cookieValue.getValue();

        // 입장이 허용되어 페이지 리다이렉트 가능한지 확인
        return userQueueService.isAllowedByToken(queue, userId).filter(allowed -> allowed) // 허용되었다면
                .flatMap(allowed -> Mono.empty()) // 렌더링 없이 빈 Mono 반환
                .switchIfEmpty(
                        // 대기열 등록. 이미 대기열에 있으면서 오류가 발생할 경우, 해당 큐에서의 사용자 랭크 가져오기
                        userQueueService.registerWaitQueue(queue, userId).onErrorResume(ex -> userQueueService.getRank(queue, userId)).then() // Mono<Void> 반환
                );
    }

    // 허용 가능한 사용자인지 확인
    @GetMapping("/allowed") // GET 요청 매핑
    public Mono<AllowedUserResponse> isAllowedUser(@RequestParam(name = "queue", defaultValue = "default") String queue, // 대기열 이름 받아옴 (기본값: default)
                                                   @RequestParam(name = "user_id") Long userId, // 사용자 ID 받아옴
                                                   @RequestParam(name = "token") String token) { // 토큰 받아옴
        return userQueueService.isAllowedByToken(queue, userId) // 토큰으로 사용자 허용 여부 확인
                .map(AllowedUserResponse::new); // 사용자 허용 응답으로 매핑
    }

    @GetMapping("/rank") // GET 요청 매핑
    public Mono<RankNumberResponse> getRankUser(@RequestParam(name = "queue", defaultValue = "default") String queue, // 대기열 이름 받아옴 (기본값: default)
                                                @RequestParam(name = "user_id") Long userId) { // 사용자 ID 받아옴
        log.info("=========RANK========");
        log.info(String.valueOf(userId));
        log.info("=====================");

        return userQueueService.getRank(queue, userId) // 사용자의 순위 조회
                .map(RankNumberResponse::new); // 순위 응답으로 매핑
    }

}
