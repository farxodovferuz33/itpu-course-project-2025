package com.example.marosim_travel_agent_back.entity.packets;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "packets")
@Builder
public class Packet {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;
    @Column(nullable = false, unique = true)
    private String title;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;
    @Column(nullable = false)
    private Double price;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private PacketPhoto photo;

}
