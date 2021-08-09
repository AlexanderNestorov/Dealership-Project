package com.example.dealership.repositories.location;

import com.example.dealership.models.location.Location;
import com.example.dealership.models.review.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface LocationRepository extends JpaRepository<Location, Long> {
    Optional<Location> findLocationById(Long id);

    @Transactional
    void deleteLocationById(Long id);

//    @Query(
//            value = "SELECT * from reviews r WHERE r.car_id = ?1",
//            nativeQuery = true
//    )
//    List<Review> findAllByCar_id(Long carId);
//
//    @Query(
//            value = "SELECT r.author from reviews r WHERE r.car_id = ?1",
//            nativeQuery = true
//    )
//    String findReviewAuthorByCarId(Long carId);
}
