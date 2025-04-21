package com.example.marosim_travel_agent_back.service.guide;

import com.example.marosim_travel_agent_back.dto.guide.GuideSaveDto;
import com.example.marosim_travel_agent_back.entity.guides.Guide;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface GuideService {
    Guide saveGuide(GuideSaveDto guideSaveDto) throws IOException;
    List<Guide> getAllGuide();
    UUID deleteGuideByUUID(UUID uuid);
}
