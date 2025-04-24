package com.course.project.repo.packet;

import com.course.project.entity.packets.Packet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PacketRepo extends JpaRepository<Packet, UUID> {
}
