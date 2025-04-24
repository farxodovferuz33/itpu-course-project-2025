package com.course.project.service.packet;

import com.course.project.dto.packet.PacketSaveDto;
import com.course.project.entity.packets.Packet;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface PacketService {
    Packet savePacket(PacketSaveDto packetSaveDto) throws IOException;
    List<Packet> getAllPacket();
    UUID deletePacketByUUID(UUID uuid);
    Packet getPacketByUUID(UUID uuid);
}
