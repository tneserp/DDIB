package com.ddib.user.user.controller;

import com.ddib.user.user.dto.UserInfoDto;
import com.ddib.user.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/user", produces = "application/json")
@Tag(name = "User Controller", description = "회원 API")
public class UserController {

    private final UserService userService;

    @GetMapping
    @Operation(summary = "회원 정보 조회 API")
    public ResponseEntity<?> userDetails(@RequestParam @Parameter String email) {
        try {
            UserInfoDto userInfoEntity = userService.findUser(email);

            return new ResponseEntity<UserInfoDto>(userInfoEntity, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
    }

//    @PostMapping
//    @Operation(summary = "회원정보를 변경합니다.")
////    public ResponseEntity<?> userInfoModify(@RequestParam String email , @RequestParam String phone ,@RequestParam String nickname , @RequestParam String birth ,  @RequestParam Boolean gender){    public ResponseEntity<?> userInfoModify(@RequestParam String email , @RequestParam String phone ,@RequestParam String nickname , @RequestParam String birth ,  @RequestParam Boolean gender){
//    public ResponseEntity<?> userInfoModify(@RequestBody UserInfoDto userInfo) {
//        try {
//            userService.modifyUserInfo(userInfo);
//
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (Exception e) {
//            e.printStackTrace();
//
//            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
//        }
//    }
}
