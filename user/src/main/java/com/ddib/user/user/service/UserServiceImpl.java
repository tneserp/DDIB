package com.ddib.user.user.service;

import com.ddib.user.user.dto.UserInfoDto;
import com.ddib.user.user.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserInfoRepository userInfoRepository;

    @Override
    public UserInfoDto findUser(String email) {
        return userInfoRepository.findByEmail(email);
    }

    @Override
    public void modifyUserInfo(UserInfoDto userInfoDto) {
//        String email = userInfoDto.getEmail();
//
//        if (userInfoRepository.existsByEmail(email)) {
//            userInfoDto.setUserInfoId(userInfoRepository.findByEmail(email).getUserInfoId());
//        }
//        userInfoRepository.save(userInfoDto);
    }
}