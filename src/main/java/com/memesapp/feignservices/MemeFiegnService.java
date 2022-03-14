package com.memesapp.feignservices;

import com.memesapp.conf.FeignMemeConfiguration;
import com.memesapp.dto.MemeResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "MemeFeignService", url = "https://api.imgflip.com/",
        configuration = FeignMemeConfiguration.class)
public interface MemeFiegnService {

    @RequestMapping(method = RequestMethod.GET, value = "/get_memes")
    public MemeResponse get_memes();
}
