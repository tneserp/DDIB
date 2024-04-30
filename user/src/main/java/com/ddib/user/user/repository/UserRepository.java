package com.ddib.user.user.repository;


import com.ddib.user.user.domain.User;
import com.ddib.user.user.dto.resposne.UserInfoDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    void deleteByEmail(String email);
}
