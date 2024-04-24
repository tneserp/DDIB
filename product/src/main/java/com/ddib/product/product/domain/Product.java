package com.ddib.product.product.domain;

import com.ddib.product.product.exception.ProductStockShortageException;
import com.ddib.product.user.domain.Seller;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;

    @Column(nullable = false)
    private String name;

    private int totalStock;

    private int stock;

    @Column(nullable = false)
    private Timestamp eventDate;

    private int eventStartTime;

    private int eventEndTime;

    private int price;

    private double discount;

    private String thumbnailImage;

    @Column(nullable = false)
    private ProductCategory category;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductDetail> details;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FavoriteProduct> likedUsers;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Seller seller;

    private boolean isOver;

    public void decreaseStock(int amount) {
        isStockShortage(amount);
        stock -= amount;

        if (stock == 0) {
            this.isOver = true;
        }
    }

    public void updateStock(int amount) {
        this.stock = amount;
    }

    public void updateIsOver(boolean isOver) {
        this.isOver = isOver;
    }

    private void isStockShortage(int amount) {
        if (stock - amount < 0) {
            throw new ProductStockShortageException();
        }
    }

}
