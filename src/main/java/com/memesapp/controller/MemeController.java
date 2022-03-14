package com.memesapp.controller;

import com.memesapp.dto.MemeResponse;
import com.memesapp.feignservices.MemeFiegnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class MemeController {

    @Autowired
    MemeFiegnService service;

    @GetMapping("/all-memes")
    public MemeResponse getMemesList(){
        return service.get_memes();
    }
}
