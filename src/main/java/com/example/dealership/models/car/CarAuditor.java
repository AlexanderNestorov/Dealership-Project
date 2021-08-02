package com.example.dealership.models.car;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;

import java.util.Optional;

@Configuration
public class CarAuditor implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor() {
        String string = "user2";
        return Optional.ofNullable(string);
    }
}
