package com.course.project.entity.packets;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "packet_photos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PacketPhoto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;
    @Column(nullable = false, name = "photo_bytes")
    @Lob
    private byte[] photoData;
    @Column(nullable = false)
    private String caption;

    @OneToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    private Packet packet;

}
