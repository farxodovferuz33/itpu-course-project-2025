package com.example.marosim_travel_agent_back.repo.gallery;

import com.example.marosim_travel_agent_back.entity.gallery.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GalleryRepo extends JpaRepository<Gallery, UUID> {
}
