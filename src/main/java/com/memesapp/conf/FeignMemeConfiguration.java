package com.memesapp.conf;

import feign.okhttp.OkHttpClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignMemeConfiguration {

        @Bean
        public OkHttpClient client() {
            return new OkHttpClient();
        }
}
