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

    @Query(
            value = "SELECT * from locations l WHERE l.city = ?1",
            nativeQuery = true
    )
    List<Location> findAllByCity(String city);

    @Query(
            value = "SELECT DISTINCT l.city FROM locations l",
            nativeQuery = true
    )
    List<String> findAllCities();

}
