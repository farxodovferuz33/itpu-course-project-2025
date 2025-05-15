package com.example.marosim_travel_agent_back.controller.guide;

import com.example.marosim_travel_agent_back.dto.guide.GuidePhotoSaveDto;
import com.example.marosim_travel_agent_back.dto.guide.GuideSaveDto;
import com.example.marosim_travel_agent_back.entity.guides.Guide;
import com.example.marosim_travel_agent_back.service.guide.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/guide")
public class GuideController {
    private final GuideService guideService;


    @PostMapping
    public HttpEntity<?> saveGuide(    @RequestParam String fullName,
                                       @RequestParam String description,
                                       @RequestParam String caption,
                                       @RequestParam MultipartFile photo) {
        try {
            Guide saveGuide = guideService.saveGuide(new GuideSaveDto(fullName, description, new GuidePhotoSaveDto(photo, caption)));
            return ResponseEntity.ok(saveGuide);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Unable to post guide");
        }
    }

    @GetMapping
    public HttpEntity<?> getAllGuide(){
        List<Guide> allGuide = guideService.getAllGuide();
        return ResponseEntity.ok(allGuide);
    }

    @DeleteMapping("/{uuid}")
    public HttpEntity<?> deleteGuide(@PathVariable UUID uuid){
        UUID deletedGuideByUUID = guideService.deleteGuideByUUID(uuid);
        return ResponseEntity.ok(deletedGuideByUUID);
    }

}
