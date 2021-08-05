package com.example.dealership.models.car;
import com.example.dealership.models.picture.BonusPicture;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Min;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;


@Entity
@Table(name = "cars")
@EntityListeners(AuditingEntityListener.class)
public class Car implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false,unique = true)
    private Long id;

    @Column(length = 100,nullable = false)
    private String modelName;

    @Column( nullable = false)
    private String brand;

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

    @Column(nullable = false)
    @Min(value = 1000, message = "Price should be higher than 1000$.")
    private int price;

    @Column(nullable = false)
    @Min(value = 1990, message = "No cars produced before 1990 are allowed!")
    private int yearOfProduction;

    @Column (nullable = false)
    private String mainImage;

    @CreatedDate
    private Date createDate;

    @Column(nullable = false)
    private String author;

    @OneToMany(mappedBy = "car_id", fetch = FetchType.LAZY,
    cascade = CascadeType.ALL)
    private Set<BonusPicture> bonusPictures;

    public Car() {
    }

    public Car(Long id,String modelName, String brand, String type, int power, int topSpeed,
               int torque, int fuelCapacity, int weight, String fuelType, String transmission,
               String drivetrain,String mainImage,int price, int yearOfProduction, String author) {

        this.id = id;
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
        this.price = price;
        this.yearOfProduction = yearOfProduction;
        this.mainImage = mainImage;
        this.author = author;
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

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getYearOfProduction() {
        return yearOfProduction;
    }

    public void setYearOfProduction(int yearOfProduction) {
        this.yearOfProduction = yearOfProduction;
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }

    public Set<BonusPicture> getBonusPictures() {
        return bonusPictures;
    }

    public void setBonusPictures(Set<BonusPicture> bonusPictures) {
        this.bonusPictures = bonusPictures;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
