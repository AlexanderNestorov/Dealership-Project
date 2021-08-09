package com.example.dealership.services;

import com.example.dealership.exceptions.ItemNotFoundException;
import com.example.dealership.models.location.Location;
import com.example.dealership.models.review.Review;
import com.example.dealership.repositories.location.LocationRepository;
import com.example.dealership.repositories.review.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    private final LocationRepository locationRepository;

    @Autowired
    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public Location addLocation(Location location) {
        return locationRepository.save(location);
    }

    public List<Location> findAllLocations() {
        return locationRepository.findAll();
    }

    public Location updateLocation(Location location) {
        return locationRepository.save(location);
    }

    public Location findLocationById(Long id) {
        return locationRepository.findLocationById(id)
                .orElseThrow(() -> new ItemNotFoundException("Location with id " + id + " was not found"));
    }

    public void deleteLocation(Long id) {
        locationRepository.deleteLocationById(id);
    }

}
