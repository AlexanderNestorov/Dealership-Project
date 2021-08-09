package com.example.dealership.controllers;

import com.example.dealership.models.location.Location;
import com.example.dealership.services.LocationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/location")
public class LocationController {
    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Location>> getAllLocations() {
        List<Location> locations = this.locationService.findAllLocations();
        return new ResponseEntity<>(locations, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Location> addLocation(@RequestBody Location location) {
        Location newLocation = this.locationService.addLocation(location);

        return new ResponseEntity<>(newLocation, HttpStatus.CREATED);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable("id") Long id) {
        Location location = this.locationService.findLocationById(id);

        return new ResponseEntity<>(location, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Location> updateLocation(@RequestBody Location location) {
        Location updateLocation = this.locationService.updateLocation(location);

        return new ResponseEntity<>(updateLocation, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteLocation(@PathVariable("id") Long id) {
        locationService.deleteLocation(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
