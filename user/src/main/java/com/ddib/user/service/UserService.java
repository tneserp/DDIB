package com.ddib.user.service;


import com.ddib.user.dto.UserInfoEntity;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserInfoEntity findUser(String email);

    void modifyUserInfo(UserInfoEntity userInfoEntity);
}
