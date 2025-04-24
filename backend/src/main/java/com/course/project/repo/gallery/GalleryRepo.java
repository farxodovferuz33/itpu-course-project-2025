package com.course.project.repo.gallery;

import com.course.project.entity.gallery.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GalleryRepo extends JpaRepository<Gallery, UUID> {
}
