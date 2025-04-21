package com.example.marosim_travel_agent_back.service.gallery;

import com.example.marosim_travel_agent_back.dto.gallery.GallerySaveDto;
import com.example.marosim_travel_agent_back.entity.gallery.Gallery;
import com.example.marosim_travel_agent_back.repo.gallery.GalleryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GalleryServiceImpl implements GalleryService {
    private final GalleryRepo galleryRepo;

    @Override
    public Gallery saveGallery(GallerySaveDto gallerySaveDto) throws IOException {
        Gallery gallery = Gallery.builder()
                .photoData(gallerySaveDto.photo().getBytes())
                .caption(gallerySaveDto.caption())
                .build();
        Gallery saved = galleryRepo.save(gallery);
        return saved;
    }

    @Override
    public List<Gallery> getAllGallery() {
        List<Gallery> all = galleryRepo.findAll();
        return all;
    }

    @Override
    public UUID deleteGalleryByUUID(UUID uuid) {
        galleryRepo.deleteById(uuid);
        return uuid;
    }
}
