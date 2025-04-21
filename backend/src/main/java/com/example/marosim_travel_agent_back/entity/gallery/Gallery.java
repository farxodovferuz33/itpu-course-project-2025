package com.example.marosim_travel_agent_back.entity.gallery;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "gallery_photos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(insertable = false, name = "id")
    private UUID uuid;
    @Lob
    @Column(name = "photo_bytes", nullable = false)
    private byte[] photoData;
    @Column(nullable = false)
    private String caption;
}
