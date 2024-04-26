package com.ddib.user.user.service.user;

import com.ddib.user.user.domain.User;
import com.ddib.user.user.dto.request.SellerRequestDto;
import com.ddib.user.user.dto.request.UserModifyRequestDto;
import com.ddib.user.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User findUser(String email) {
        return userRepository.findByEmail(email);
    }

    @Transactional
    @Override
    public void modifyUserInfo(UserModifyRequestDto requestDto, Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        user.updateInfo(requestDto);
    }
}