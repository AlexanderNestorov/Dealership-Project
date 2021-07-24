package com.example.dealership.controllers;

import com.example.dealership.models.car.Car;
import com.example.dealership.repositories.car.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/car")
public class CarController {
    @Autowired
    CarRepository carRepository;

    @PostMapping("/add")
    public ResponseEntity<Car> addCar(@RequestBody Car car) {
        Car newCar = carRepository.save(car);

        return new ResponseEntity<>(newCar, HttpStatus.CREATED);
    }
}
