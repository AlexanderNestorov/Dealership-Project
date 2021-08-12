package com.example.dealership.services;

import com.example.dealership.exceptions.ItemNotFoundException;
import com.example.dealership.models.car.Car;
import com.example.dealership.repositories.car.CarRepository;
import com.example.dealership.repositories.review.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CarService {
    private final CarRepository carRepository;
    private final ReviewRepository reviewRepository;

    @Autowired
    public CarService(CarRepository carRepository, ReviewRepository reviewRepository) {
        this.carRepository = carRepository;
        this.reviewRepository = reviewRepository;
    }

    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    public List<Car> findAllCars() {
        return carRepository.findAll();
    }

    public Car updateCar(Car car) {
        return carRepository.save(car);
    }

    public Car findCarById(Long id) {
        return carRepository.findCarById(id)
                .orElseThrow(() -> new ItemNotFoundException("Car with id " + id + " was not found"));
    }


    public void deleteCar(Long id) {
        carRepository.deleteCarById(id);
        reviewRepository.deleteByCar(id);
    }

    public List<Car> findAllCarsByPriceDesc() {
        return this.carRepository.findCarsByPrice();
    }

    public List<Car> findAllCarsByAuthor(String name) {
        return this.carRepository.findAllByAuthor(name);
    }
}
