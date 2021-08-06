package com.example.dealership.repositories.review;

import com.example.dealership.models.picture.BonusPicture;
import com.example.dealership.models.review.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review,Long> {

    Optional<Review> findReviewById(Long id);

    @Transactional
    void deleteReviewById(Long id);

    @Query(
            value = "SELECT * from reviews r WHERE r.car_id = ?1",
            nativeQuery = true
    )
    List<Review> findAllByCar_id(Long carId);

}
