package com.example.dealership.services;

import com.example.dealership.exceptions.CarNotFoundException;
import com.example.dealership.models.car.Car;
import com.example.dealership.models.picture.BonusPicture;
import com.example.dealership.repositories.picture.PictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PictureService {
    private final PictureRepository pictureRepository;

    @Autowired
    public PictureService(PictureRepository pictureRepository) {
        this.pictureRepository = pictureRepository;
    }

    public BonusPicture addPicture(BonusPicture picture) {
        return pictureRepository.save(picture);
    }

    public List<BonusPicture> findAllPictures() {
        return pictureRepository.findAll();
    }

    public BonusPicture updatePicture(BonusPicture picture) {
        return pictureRepository.save(picture);
    }

    public BonusPicture findPictureById(Long id) {
        return pictureRepository.findBonusPictureById(id)
                .orElseThrow(() -> new CarNotFoundException("Car with id " + id + " was not found"));
    }

    public void deletePicture(Long id) {
        pictureRepository.deleteBonusPictureById(id);
    }

}
