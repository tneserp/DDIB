package com.ddib.user.user.dto.resposne;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserResponseDto {
    private String name;
    private String email;
}
