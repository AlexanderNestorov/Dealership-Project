package com.example.dealership.services;

import com.example.dealership.exceptions.ItemNotFoundException;
import com.example.dealership.models.review.Review;
import com.example.dealership.repositories.review.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> findAllReviews() {
        return reviewRepository.findAll();
    }

    public Review updateReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review findReviewById(Long id) {
        return reviewRepository.findReviewById(id)
                .orElseThrow(() -> new ItemNotFoundException("Review with id " + id + " was not found"));
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteReviewById(id);
    }

    public List<Review> findAllReviewsByCar(Long id) {
        return this.reviewRepository.findAllByCar_id(id);
    }

    public String findReviewAuthorByCarId(Long id) {
        return this.reviewRepository.findReviewAuthorByCarId(id);
    }

}

