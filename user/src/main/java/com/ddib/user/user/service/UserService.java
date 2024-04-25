package com.ddib.user.user.service;


import com.ddib.user.user.dto.UserInfoDto;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserInfoDto findUser(String email);

    void modifyUserInfo(UserInfoDto userInfoEntity);
}
