package com.ddib.user.user.service.user;


import com.ddib.user.user.dto.request.UserModifyRequestDto;
import com.ddib.user.user.dto.resposne.UserInfoDto;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserInfoDto findUser(String email);
    void modifyUserInfo(UserModifyRequestDto requestDto, String email);
    void deleteUser(String email);
}
