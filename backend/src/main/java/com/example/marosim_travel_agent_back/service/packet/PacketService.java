package com.example.marosim_travel_agent_back.service.packet;

import com.example.marosim_travel_agent_back.dto.guide.GuideSaveDto;
import com.example.marosim_travel_agent_back.dto.packet.PacketSaveDto;
import com.example.marosim_travel_agent_back.entity.packets.Packet;
import com.example.marosim_travel_agent_back.entity.packets.PacketPhoto;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface PacketService {
    Packet savePacket(PacketSaveDto packetSaveDto) throws IOException;
    List<Packet> getAllPacket();
    UUID deletePacketByUUID(UUID uuid);
    Packet getPacketByUUID(UUID uuid);
}
