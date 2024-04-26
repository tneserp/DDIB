package com.ddib.user.user.service.seller;

import com.ddib.user.user.domain.Seller;
import com.ddib.user.user.dto.request.SellerRequestDto;
import com.ddib.user.user.repository.SellerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class SellerServiceImpl implements SellerService {
    private final SellerRepository sellerRepository;

    @Override
    public void applySeller(SellerRequestDto requestDto, Principal principal) {
        Seller seller = Seller.builder()
                .sellerEmail(requestDto.getSellerEmail())
                .companyName(requestDto.getCompanyName())
                .businessNumber(requestDto.getBusinessNumber())
                .ceoName(requestDto.getCeoName())
                .ceoEmail(requestDto.getCeoEmail())
                .ceoPhone(requestDto.getCeoPhone())
                .build();
        sellerRepository.save(seller);
    }
}
