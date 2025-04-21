package com.example.marosim_travel_agent_back.repo.packet;

import com.example.marosim_travel_agent_back.entity.packets.PacketPhoto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PacketPhotoRepo extends JpaRepository<PacketPhoto, UUID> {
}
