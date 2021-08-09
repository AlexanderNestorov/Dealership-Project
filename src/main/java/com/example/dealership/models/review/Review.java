package com.example.dealership.models.review;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "reviews")
public class Review implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false,unique = true)
    private Long id;

    @Column(nullable = false)
    private String text;

    @Column(nullable = false)
    private int car_id;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private String timeOfCreation;

    public Review() {
    }

    public Review(String text, int car, String author, String timeOfCreation) {
        this.text = text;
        this.car_id = car;
        this.author = author;
        this.timeOfCreation = timeOfCreation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getCar_id() {
        return car_id;
    }

    public void setCar_id(int car_id) {
        this.car_id = car_id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTimeOfCreation() {
        return timeOfCreation;
    }

    public void setTimeOfCreation(String timeOfCreation) {
        this.timeOfCreation = timeOfCreation;
    }
}
