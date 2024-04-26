package com.ddib.user.user.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "판매회원 요청 DTO")
public class SellerRequestDto {
    @NotNull
    @Schema(description = "판매회원 이메일")
    private String sellerEmail;

    @Schema(description = "기업명")
    private String companyName;

    @Schema(description = "사업자 등록 번호")
    private int businessNumber;

    @Schema(description = "대표명")
    private String ceoName;

    @Schema(description = "대표 이메일")
    private String ceoEmail;

    @Schema(description = "대표 전화번호")
    private String ceoPhone;
}
