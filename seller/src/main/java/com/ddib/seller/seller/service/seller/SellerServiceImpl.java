package com.ddib.seller.seller.service.seller;

import com.ddib.seller.seller.domain.Seller;
import com.ddib.seller.seller.dto.request.SellerModifyRequestDto;
import com.ddib.seller.seller.dto.request.SellerRequestDto;
import com.ddib.seller.seller.dto.response.SellerInfoDto;
import com.ddib.seller.seller.repository.SellerRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class SellerServiceImpl implements SellerService {
    private final SellerRepository sellerRepository;

    @Transactional
    @Override
    public void applySeller(SellerRequestDto requestDto, Principal principal) {
        sellerRepository.findBySellerEmail(principal.getName()).applySeller(requestDto);
    }

    @Override
    public SellerInfoDto findSeller(Principal principal) {
        Seller seller = sellerRepository.findBySellerEmail(principal.getName());
        SellerInfoDto sellerInfoDto = SellerInfoDto.builder()
                .companyName(seller.getCompanyName())
                .businessNumber(seller.getBusinessNumber())
                .ceoName(seller.getCeoName())
                .ceoEmail(seller.getCeoEmail())
                .ceoPhone(seller.getCeoPhone())
                .build();

        return sellerInfoDto;
    }

    @Transactional
    @Override
    public void modifySeller(SellerModifyRequestDto requestDto, Principal principal) {
        sellerRepository.findBySellerEmail(principal.getName()).updateSeller(requestDto);
    }
}
