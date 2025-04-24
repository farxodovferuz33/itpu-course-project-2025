package com.course.project.dto.packet;

public record PacketSaveDto(String title, String description, Double price, PacketPhotoSaveDto packetPhotoSaveDto) {
}
