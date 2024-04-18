package com.ddib.user.repository;


import com.ddib.user.dto.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfoEntity, Long> {

    UserInfoEntity findByEmail(String email);

    boolean existsByEmail(String email);
}
