package com.memesapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MemesAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MemesAppApplication.class, args);
	}

}
