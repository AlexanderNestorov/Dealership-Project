package com.example.dealership.models.picture;

import com.example.dealership.models.car.Car;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "pictures")
public class BonusPicture implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false,unique = true)
    private Long id;

    @Column(nullable = false)
    private String url;

   @Column(nullable = false)
    private int car_id;

    public BonusPicture() {
    }

    public BonusPicture(String url, int car) {
        this.url = url;
        this.car_id = car;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getCar_id() {
        return car_id;
    }

    public void setCar_id(int car_id) {
        this.car_id = car_id;
    }
}
