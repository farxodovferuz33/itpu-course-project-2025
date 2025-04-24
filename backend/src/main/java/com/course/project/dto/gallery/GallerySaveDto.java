package com.course.project.dto.gallery;

import org.springframework.web.multipart.MultipartFile;

public record GallerySaveDto(MultipartFile photo, String caption) {
}
