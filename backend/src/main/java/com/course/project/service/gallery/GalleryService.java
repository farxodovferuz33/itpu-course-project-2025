package com.course.project.service.gallery;

import com.course.project.dto.gallery.GallerySaveDto;
import com.course.project.entity.gallery.Gallery;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface GalleryService {
    Gallery saveGallery(GallerySaveDto gallerySaveDto) throws IOException;
    List<Gallery> getAllGallery();
    UUID deleteGalleryByUUID(UUID uuid);
}
