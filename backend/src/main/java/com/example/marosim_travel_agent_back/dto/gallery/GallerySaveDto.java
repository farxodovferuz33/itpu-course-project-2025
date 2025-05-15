package com.example.marosim_travel_agent_back.dto.gallery;

import org.springframework.web.multipart.MultipartFile;

public record GallerySaveDto(MultipartFile photo, String caption) {
}
