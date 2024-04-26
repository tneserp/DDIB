package com.ddib.user.user.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserModifyRequestDto {
    private String name;
    private String phone;
    private String roadAddress;
    private String detailAddress;
    private int zipcode;
}
