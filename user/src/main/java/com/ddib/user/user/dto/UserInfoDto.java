package com.ddib.user.user.dto;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "user_info")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_info_id")
    private Long userInfoId ;
    private String email;
    private String name;
    private String phone;
}