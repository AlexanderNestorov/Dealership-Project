package com.example.dealership.repositories.car;

import com.example.dealership.models.car.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<Car,Long> {


}
