package com.example.dealership.controllers;

import com.example.dealership.models.car.Car;
import com.example.dealership.services.CarService;
import com.example.dealership.services.PictureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/car")
public class CarController {
    private final CarService carService;
    private final PictureService pictureService;

    public CarController(CarService carService, PictureService pictureService) {
        this.carService = carService;
        this.pictureService = pictureService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Car>> getAllCars() {
        List<Car> cars = this.carService.findAllCars();
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Car> addCar(@RequestBody Car car) {
        Car newCar = this.carService.addCar(car);

        return new ResponseEntity<>(newCar, HttpStatus.CREATED);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable("id") Long id) {
        Car car = this.carService.findCarById(id);

        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Car> updateCar(@RequestBody Car car) {
        Car updateCar = this.carService.updateCar(car);

        return new ResponseEntity<>(updateCar,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable("id") Long id) {
        carService.deleteCar(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/recent")
    public ResponseEntity<List<Car>> importCars() {
        List<Car> cars = this.carService.findAllCarsByPriceDesc();

        return new ResponseEntity<>(cars, HttpStatus.OK);
    }
}
