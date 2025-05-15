package com.example.marosim_travel_agent_back.service.gallery;

import com.example.marosim_travel_agent_back.dto.gallery.GallerySaveDto;
import com.example.marosim_travel_agent_back.entity.gallery.Gallery;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface GalleryService {
    Gallery saveGallery(GallerySaveDto gallerySaveDto) throws IOException;
    List<Gallery> getAllGallery();
    UUID deleteGalleryByUUID(UUID uuid);
}
