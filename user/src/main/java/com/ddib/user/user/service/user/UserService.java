package com.ddib.user.user.service.user;


import com.ddib.user.user.domain.User;
import com.ddib.user.user.dto.request.SellerRequestDto;
import com.ddib.user.user.dto.request.UserModifyRequestDto;
import com.ddib.user.user.dto.resposne.UserInfoDto;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public interface UserService {
    User findUser(String email);

    void modifyUserInfo(UserModifyRequestDto requestDto, Principal principal);
}
