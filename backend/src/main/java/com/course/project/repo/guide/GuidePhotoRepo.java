package com.course.project.repo.guide;

import com.course.project.entity.guides.GuidePhoto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GuidePhotoRepo extends JpaRepository<GuidePhoto, UUID> {
}
