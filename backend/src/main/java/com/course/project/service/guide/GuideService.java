package com.course.project.service.guide;

import com.course.project.dto.guide.GuideSaveDto;
import com.course.project.entity.guides.Guide;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface GuideService {
    Guide saveGuide(GuideSaveDto guideSaveDto) throws IOException;
    List<Guide> getAllGuide();
    UUID deleteGuideByUUID(UUID uuid);
}
