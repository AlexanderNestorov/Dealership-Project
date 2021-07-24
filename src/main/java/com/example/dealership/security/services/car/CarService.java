package com.example.dealership.security.services.car;

import com.example.dealership.exceptions.CarNotFoundException;
import com.example.dealership.models.car.Car;
import com.example.dealership.repositories.car.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CarService {
    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
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
                .orElseThrow(() -> new CarNotFoundException("Car with id " + id + " was not found"));
    }

    public void deleteCar(Long id) {
        carRepository.deleteCarById(id);
    }
}
