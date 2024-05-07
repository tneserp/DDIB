package com.ddib.user.user.service.user;

import com.ddib.user.user.domain.User;
import com.ddib.user.user.dto.request.UserModifyRequestDto;
import com.ddib.user.user.dto.resposne.UserInfoDto;
import com.ddib.user.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public UserInfoDto findUser(String email) {
        User user = userRepository.findByEmail(email);
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
    public void modifyUserInfo(UserModifyRequestDto requestDto, String email) {
        userRepository.findByEmail(email).updateInfo(requestDto);
    }

    @Transactional
    @Override
    public void deleteUser(String email) {
        userRepository.deleteByEmail(email);
    }

    @Transactional
    @Override
    public void logout(String accessToken, String refreshToken) {
        // 1. Access Token 검증
        if (!tokenProvider.validateToken(accessToken)) {
            throw new ApiException(BasicResponseMessage.UNAUTHORIZED);
        }

        // 2. Access Token 에서 authentication 을 가져옵니다.
        Authentication authentication = tokenProvider.getAuthentication(accessToken);

        // 3. DB에 저장된 Refresh Token 제거
        Long userId = Long.parseLong(authentication.getName());
        refreshTokenRepository.deleteById(userId);

        // 4. Access Token blacklist에 등록하여 만료시키기
        // 해당 엑세스 토큰의 남은 유효시간을 얻음
        Long expiration = tokenProvider.getExpiration(accessToken);
        redisUtil.setBlackList(accessToken, "access_token", expiration);
    }
}