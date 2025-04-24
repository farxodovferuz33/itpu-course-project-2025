package com.course.project.controller.feedback;

import com.course.project.dto.feedback.FeedbackSaveDto;
import com.course.project.entity.feedback.Feedback;
import com.course.project.service.feedback.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/feedback")
@RequiredArgsConstructor
public class FeedbackController {
    private final FeedbackService service;

    @PostMapping
    public HttpEntity<?> postFeedback(@RequestBody FeedbackSaveDto dto) {
        try {
            Feedback feedback = service.saveFeedback(dto);
            return ResponseEntity.status(201).body(feedback);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Unable to post feedback");
        }
    }

    @GetMapping("/getf")
    public HttpEntity<?> getFeedback(@RequestParam(required = false, defaultValue = "0") int page, @RequestParam(required = false, defaultValue = "5") int size) {
        try {
            Page<Feedback> pagedFeedback = service.getPagedFeedback(page, size);
            return ResponseEntity.ok(pagedFeedback);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Server error");
        }
    }

    @DeleteMapping("/del/{uuid}")
    public HttpEntity<?> deleteFeedback(@PathVariable UUID uuid){
        try {
            UUID deletedFeedbackByUUID = service.deleteFeedbackByUUID(uuid);
            return ResponseEntity.ok(deletedFeedbackByUUID);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Unable to delete");
        }
    }

}
