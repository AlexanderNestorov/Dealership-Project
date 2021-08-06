package com.example.dealership.controllers;

import com.example.dealership.models.review.Review;
import com.example.dealership.services.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/review")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviews = this.reviewService.findAllReviews();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Review> addReview(@RequestBody Review review) {
        Review newReview = this.reviewService.addReview(review);

        return new ResponseEntity<>(newReview, HttpStatus.CREATED);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable("id") Long id) {
        Review review = this.reviewService.findReviewById(id);

        return new ResponseEntity<>(review, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Review> updateReview(@RequestBody Review review) {
        Review updateReview = this.reviewService.updateReview(review);

        return new ResponseEntity<>(updateReview, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable("id") Long id) {
        reviewService.deleteReview(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/bycar{id}")
    public ResponseEntity<List<Review>> getReviewsByCar(@PathVariable("id") Long id) {
        List<Review> reviews = this.reviewService.findAllReviewsByCar(id);

        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
}
