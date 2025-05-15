package com.example.marosim_travel_agent_back.service.guide;

import com.example.marosim_travel_agent_back.dto.guide.GuideSaveDto;
import com.example.marosim_travel_agent_back.entity.guides.Guide;
import com.example.marosim_travel_agent_back.entity.guides.GuidePhoto;
import com.example.marosim_travel_agent_back.repo.guide.GuidePhotoRepo;
import com.example.marosim_travel_agent_back.repo.guide.GuideRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GuideServiceImpl implements GuideService {
    private final GuideRepo guideRepo;
    private final GuidePhotoRepo guidePhotoRepo;
    @Override
    @Transactional
    public Guide saveGuide(GuideSaveDto guideSaveDto) throws IOException {
        GuidePhoto guidePhoto = GuidePhoto.builder()
                .caption(guideSaveDto.guidePhoto().caption())
                .photoData(guideSaveDto.guidePhoto().photo().getBytes())
                .build();
        GuidePhoto savedGuidePhoto = guidePhotoRepo.save(guidePhoto);
        Guide guide = Guide.builder()
                .fullName(guideSaveDto.fullName())
                .description(guideSaveDto.description())
                .photo(savedGuidePhoto)
                .build();

        Guide savedGuide = guideRepo.save(guide);
        return savedGuide;
    }

    @Override
    public List<Guide> getAllGuide() {
        List<Guide> all = guideRepo.findAll();
        return all;
    }

    @Override
    public UUID deleteGuideByUUID(UUID uuid) {
        guideRepo.deleteById(uuid);
        return uuid;
    }
}
