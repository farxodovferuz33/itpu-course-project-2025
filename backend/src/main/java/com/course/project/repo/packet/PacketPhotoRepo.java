package com.course.project.repo.packet;

import com.course.project.entity.packets.PacketPhoto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PacketPhotoRepo extends JpaRepository<PacketPhoto, UUID> {
}
