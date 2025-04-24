package com.course.project.dto.packet;

import org.springframework.web.multipart.MultipartFile;

public record PacketPhotoSaveDto(MultipartFile photo, String caption) {}
