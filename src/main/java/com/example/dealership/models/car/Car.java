package com.example.dealership.models.car;



import javax.persistence.*;


@Entity
@Table(name = "cars",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "modelName")
        })
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;


    @Column(length = 100,nullable = false)
    private String modelName;

    @OneToOne
    @JoinColumn(name = "brand", nullable = false)
    private Brand brand;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private int power;

    @Column(nullable = false)
    private int topSpeed;

    @Column(nullable = false)
    private int torque;

    @Column(nullable = false)
    private int fuelCapacity;

    @Column(nullable = false)
    private int weight;

    @Column(nullable = false)
    private String fuelType;

    @Column(nullable = false)
    private String transmission;

    @Column(nullable = false)
    private String drivetrain;

    public Car() {
    }

    public Car(String modelName, Brand brand, String type, int power, int topSpeed, int torque, int fuelCapacity, int weight, String fuelType, String transmission, String drivetrain) {
        this.modelName = modelName;
        this.brand = brand;
        this.type = type;
        this.power = power;
        this.topSpeed = topSpeed;
        this.torque = torque;
        this.fuelCapacity = fuelCapacity;
        this.weight = weight;
        this.fuelType = fuelType;
        this.transmission = transmission;
        this.drivetrain = drivetrain;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public int getTopSpeed() {
        return topSpeed;
    }

    public void setTopSpeed(int topSpeed) {
        this.topSpeed = topSpeed;
    }

    public int getTorque() {
        return torque;
    }

    public void setTorque(int torque) {
        this.torque = torque;
    }

    public int getFuelCapacity() {
        return fuelCapacity;
    }

    public void setFuelCapacity(int fuelCapacity) {
        this.fuelCapacity = fuelCapacity;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getDrivetrain() {
        return drivetrain;
    }

    public void setDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
    }
}
