package com.example.dealership.repositories.picture;

import com.example.dealership.models.car.Car;
import com.example.dealership.models.picture.BonusPicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface PictureRepository extends JpaRepository<BonusPicture,Long> {

    Optional<BonusPicture> findBonusPictureById(Long id);

    @Transactional
    void deleteBonusPictureById(Long id);

    @Query(
            value = "SELECT * from pictures p WHERE p.car_id = ?1",
            nativeQuery = true
    )
    List<BonusPicture> findAllByCar_id(Long carId);

}
