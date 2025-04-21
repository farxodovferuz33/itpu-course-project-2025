package com.example.marosim_travel_agent_back.entity.guides;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "guide_photos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GuidePhoto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;
    @Lob
    @Column(name = "photo_bytes", nullable = false)
    private byte[] photoData;
    @Column(nullable = false)
    private String caption;
    @OneToOne(fetch = FetchType.LAZY)
    @PrimaryKeyJoinColumn
    private Guide guide;
}
