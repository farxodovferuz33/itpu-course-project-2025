package com.example.marosim_travel_agent_back.dto.packet;

public record PacketSaveDto(String title, String description, Double price, PacketPhotoSaveDto packetPhotoSaveDto) {
}
