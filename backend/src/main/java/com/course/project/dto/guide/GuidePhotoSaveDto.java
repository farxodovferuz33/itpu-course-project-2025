package com.course.project.dto.guide;

import org.springframework.web.multipart.MultipartFile;

public record GuidePhotoSaveDto(MultipartFile photo, String caption) {}
