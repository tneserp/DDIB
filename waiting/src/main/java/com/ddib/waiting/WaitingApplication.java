package com.ddib.waiting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class WaitingApplication {
    public static void main(String[] args) {
        SpringApplication.run(WaitingApplication.class, args);
    }

}
