package com.example.dealership.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultRouteController {

    @GetMapping("")
    public String hello() {
        return "forward:/index.html";
    }

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String redirect() {
        // Forward to home page so that angular routing is preserved.
        return "forward:/index.html";
    }

}
