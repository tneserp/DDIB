package com.ddib.user.user.controller;

import com.ddib.user.user.dto.request.UserModifyRequestDto;
import com.ddib.user.user.service.user.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/user", produces = "application/json")
@Tag(name = "User Controller", description = "일반회원 API")
public class UserController {
    private final UserService userService;

    @GetMapping
    @Operation(summary = "일반회원 정보 조회 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "일반회원 정보 조회 성공"),
            @ApiResponse(responseCode = "400", description = "일반회원 정보 조회 실패")
    })
    public ResponseEntity<?> userDetails(Principal principal) {
        try {
            return new ResponseEntity<>(userService.findUser(principal), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    @Operation(summary = "일반회원 정보 수정 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "일반회원 정보 수정 성공"),
            @ApiResponse(responseCode = "400", description = "일반회원 정보 수정 실패")
    })
    public ResponseEntity<?> userInfoModify(@RequestBody UserModifyRequestDto requestDto, Principal principal) {
        try {
            userService.modifyUserInfo(requestDto, principal);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping
    @Operation(summary = "일반회원 탈퇴 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "일반회원 탈퇴 성공"),
            @ApiResponse(responseCode = "400", description = "일반회원 탈퇴 실패")
    })
    public ResponseEntity<?> userDelete(Principal principal) {
        try {
            userService.deleteUser(principal);
//            userService.deleteUser(principal);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/logout")
    @Operation(summary = "일반회원 로그아웃 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "일반회원 로그아웃 성공"),
            @ApiResponse(responseCode = "400", description = "일반회원 로그아웃 실패")
    })
    public ResponseEntity<?> logout(HttpServletResponse response) {
        try {
            Cookie refresh = new Cookie("refresh", null);
            Cookie access = new Cookie("Authorization", null);

            refresh.setMaxAge(0);
            access.setMaxAge(0);

            response.addCookie(refresh);
            response.addCookie(access);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
    }
}
