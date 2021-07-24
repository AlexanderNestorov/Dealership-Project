package com.example.dealership.repositories.car;

import com.example.dealership.models.car.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand,Long> {
}
