package com.ddib.user.user.repository;


import com.ddib.user.user.dto.UserInfoDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfoDto, Long> {

    UserInfoDto findByEmail(String email);

    boolean existsByEmail(String email);
}
