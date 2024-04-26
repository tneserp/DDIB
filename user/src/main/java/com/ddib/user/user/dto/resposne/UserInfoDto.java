package com.ddib.user.user.dto.resposne;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoDto {
    private String name;
    private String email;
    private String phone;
    private String roadAddress;
    private String detailAddress;
    private int zipcode;
}
