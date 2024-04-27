package com.ddib.user.user.service.user;


import com.ddib.user.user.dto.request.UserModifyRequestDto;
import com.ddib.user.user.dto.resposne.UserInfoDto;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public interface UserService {
    UserInfoDto findUser(Principal principal);

    void modifyUserInfo(UserModifyRequestDto requestDto, Principal principal);
}
