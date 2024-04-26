package com.ddib.user.seller.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

//@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "일반회원")
public class Seller {

}
