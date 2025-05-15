package com.example.marosim_travel_agent_back.controller.packet;

import com.example.marosim_travel_agent_back.dto.packet.PacketPhotoSaveDto;
import com.example.marosim_travel_agent_back.dto.packet.PacketSaveDto;
import com.example.marosim_travel_agent_back.entity.packets.Packet;
import com.example.marosim_travel_agent_back.service.packet.PacketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/packet")
public class PacketController {
    private final PacketService packetService;

    @PostMapping
    public HttpEntity<?> postPacket(@RequestParam String title,
                                    @RequestParam String description,
                                    @RequestParam Double price,
                                    @RequestParam MultipartFile photo,
                                    @RequestParam String caption
                                    ){
        try {
            System.out.println(price);
            Packet packet = packetService.savePacket(new PacketSaveDto(title, description, price,
                    new PacketPhotoSaveDto(photo, caption)));
            return ResponseEntity.status(HttpStatus.CREATED).body(packet);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Unable to post packet");
        }
    }

    @GetMapping
    public HttpEntity<?> getPackets(){
        try {
            List<Packet> allPacket = packetService.getAllPacket();
            return ResponseEntity.ok(allPacket);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Server side error");
        }
    }

    @DeleteMapping("/{uuid}")
    public HttpEntity<?> deletePacket(@PathVariable UUID uuid){
        try {
            UUID deletedPacketByUUID = packetService.deletePacketByUUID(uuid);
            return ResponseEntity.ok(deletedPacketByUUID);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Unable to delete packet");
        }
    }


    @GetMapping("/{id}")
    public HttpEntity<?> getPacketById(@PathVariable UUID id){
        try {
            Packet packetByUUID = packetService.getPacketByUUID(id);
            return ResponseEntity.ok(packetByUUID);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Not found 404");

        }
    }


}
