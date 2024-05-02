package com.ddib.user.user.service.user;

import com.ddib.user.user.domain.User;
import com.ddib.user.user.dto.request.UserModifyRequestDto;
import com.ddib.user.user.dto.resposne.UserInfoDto;
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
    public UserInfoDto findUser(Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        return UserInfoDto.builder()
                .userId(user.getUserId())
                .name(user.getName())
                .email(user.getEmail())
                .zipcode(user.getZipcode())
                .roadAddress(user.getRoadAddress())
                .detailAddress(user.getDetailAddress())
                .build();
    }

    @Transactional
    @Override
    public void modifyUserInfo(UserModifyRequestDto requestDto, Principal principal) {
        userRepository.findByEmail(principal.getName()).updateInfo(requestDto);
    }

    @Transactional
    @Override
    public void deleteUser(Principal principal) {
        userRepository.deleteByEmail(principal.getName());
    }
}