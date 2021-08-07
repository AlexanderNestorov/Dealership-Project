package com.example.dealership.controllers;

import com.example.dealership.models.picture.BonusPicture;
import com.example.dealership.services.CarService;
import com.example.dealership.services.PictureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/picture")
public class PictureController {
    private final PictureService pictureService;

    public PictureController(PictureService pictureService) {
        this.pictureService = pictureService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<BonusPicture>> getAllPictures() {
        List<BonusPicture> pictures = this.pictureService.findAllPictures();
        return new ResponseEntity<>(pictures, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<BonusPicture> addPicture(@RequestBody BonusPicture picture) {
        BonusPicture newPicture = this.pictureService.addPicture(picture);

        return new ResponseEntity<>(newPicture, HttpStatus.CREATED);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<BonusPicture> getPictureById(@PathVariable("id") Long id) {
        BonusPicture picture = this.pictureService.findPictureById(id);

        return new ResponseEntity<>(picture, HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity<BonusPicture> updatePicture(@RequestBody BonusPicture picture) {
        BonusPicture updatePicture = this.pictureService.updatePicture(picture);

        return new ResponseEntity<>(updatePicture, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePicture(@PathVariable("id") Long id) {
        pictureService.deletePicture(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/bycar{id}")
    public ResponseEntity<List<BonusPicture>> getPicturesByCar(@PathVariable("id") Long id) {
        List<BonusPicture> pictures = this.pictureService.findAllPicturesByCar(id);

        return new ResponseEntity<>(pictures, HttpStatus.OK);
    }
}
