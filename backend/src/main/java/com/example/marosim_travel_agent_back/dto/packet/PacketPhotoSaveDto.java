package com.example.marosim_travel_agent_back.dto.packet;

import org.springframework.web.multipart.MultipartFile;

public record PacketPhotoSaveDto(MultipartFile photo, String caption) {}
