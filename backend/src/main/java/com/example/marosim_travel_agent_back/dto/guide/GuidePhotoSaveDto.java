package com.example.marosim_travel_agent_back.dto.guide;

import org.springframework.web.multipart.MultipartFile;

public record GuidePhotoSaveDto(MultipartFile photo, String caption) {}
