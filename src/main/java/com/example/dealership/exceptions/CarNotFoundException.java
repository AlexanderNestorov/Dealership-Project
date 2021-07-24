package com.example.dealership.exceptions;

public class CarNotFoundException extends RuntimeException{
    public CarNotFoundException(String message) {
        super(message);
    }

}
