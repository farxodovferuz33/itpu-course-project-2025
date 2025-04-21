package com.example.marosim_travel_agent_back.repo.packet;

import com.example.marosim_travel_agent_back.entity.packets.Packet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PacketRepo extends JpaRepository<Packet, UUID> {
}
