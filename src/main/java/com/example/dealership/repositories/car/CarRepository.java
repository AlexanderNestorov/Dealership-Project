package com.example.dealership.repositories.car;

import com.example.dealership.models.car.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface CarRepository extends JpaRepository<Car,Long> {
    Optional<Car> findCarById(Long id);

    @Transactional
    void deleteCarById(Long id);

    @Query(
            value = "SELECT * from cars c ORDER BY c.price desc limit 5",
            nativeQuery = true
    )
    List<Car> findCarsByPrice();
}
