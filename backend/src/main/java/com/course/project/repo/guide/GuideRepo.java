package com.course.project.repo.guide;

import com.course.project.entity.guides.Guide;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GuideRepo extends JpaRepository<Guide, UUID> {

}
