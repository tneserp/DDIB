package com.ddib.user.service;

import com.ddib.user.dto.UserInfoEntity;
import com.ddib.user.repository.UserInfoRepository;
import com.ddib.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final UserInfoRepository userInfoRepository;

    public UserServiceImpl(UserRepository userRepository, UserInfoRepository userInfoRepository){
        this.userRepository = userRepository;
        this.userInfoRepository = userInfoRepository;
    }
    @Override
    public UserInfoEntity findUser(String email) {
        return userInfoRepository.findByEmail(email);
    }

    @Override
    public void modifyUserInfo(UserInfoEntity userInfoEntity) {
        String email  = userInfoEntity.getEmail();

        if(userInfoRepository.existsByEmail(email)) {
            userInfoEntity.setUserInfoId(userInfoRepository.findByEmail(email).getUserInfoId());
        }
        userInfoRepository.save(userInfoEntity);

        }
    }

