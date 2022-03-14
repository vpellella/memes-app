package com.memesapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Meme implements Serializable {

    private Long id;
    private String name;
    private String url;
    private Integer width;
    private Integer height;
    private Integer box_count;
}
