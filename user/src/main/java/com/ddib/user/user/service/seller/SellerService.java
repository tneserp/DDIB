package com.ddib.user.user.service.seller;

import com.ddib.user.user.dto.request.SellerRequestDto;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public interface SellerService {
    void applySeller(SellerRequestDto requestDto, Principal principal);
}
