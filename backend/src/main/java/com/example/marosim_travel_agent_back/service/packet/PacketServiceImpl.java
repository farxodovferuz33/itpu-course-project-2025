package com.example.marosim_travel_agent_back.service.packet;

import com.example.marosim_travel_agent_back.dto.packet.PacketSaveDto;
import com.example.marosim_travel_agent_back.entity.packets.Packet;
import com.example.marosim_travel_agent_back.entity.packets.PacketPhoto;
import com.example.marosim_travel_agent_back.repo.packet.PacketPhotoRepo;
import com.example.marosim_travel_agent_back.repo.packet.PacketRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PacketServiceImpl implements PacketService{

    private final PacketRepo packetRepo;
    private final PacketPhotoRepo packetPhotoRepo;

    @Override
    @Transactional
    public Packet savePacket(PacketSaveDto packetSaveDto) throws IOException {
        PacketPhoto packetPhoto = PacketPhoto.builder()
                .photoData(packetSaveDto.packetPhotoSaveDto().photo().getBytes())
                .caption(packetSaveDto.packetPhotoSaveDto().caption())
                .build();
        PacketPhoto savedPhoto = packetPhotoRepo.save(packetPhoto);
        Packet packet = Packet.builder()
                .title(packetSaveDto.title())
                .description(packetSaveDto.description())
                .price(packetSaveDto.price())
                .photo(savedPhoto)
                .build();
        Packet savedPack = packetRepo.save(packet);
        return savedPack;
    }

    @Override
    public List<Packet> getAllPacket() {
        List<Packet> all = packetRepo.findAll();
        return all;
    }

    @Override
    public UUID deletePacketByUUID(UUID uuid) {
        packetRepo.deleteById(uuid);
        return uuid;
    }

    @Override
    public Packet getPacketByUUID(UUID uuid) {
        Optional<Packet> byId = packetRepo.findById(uuid);
        return byId.get();
    }
}
