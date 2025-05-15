package com.example.marosim_travel_agent_back.service.feedback;

import com.example.marosim_travel_agent_back.dto.feedback.FeedbackSaveDto;
import com.example.marosim_travel_agent_back.entity.feedback.Feedback;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface FeedbackService {
    Feedback saveFeedback(FeedbackSaveDto feedbackSaveDto);
    Page<Feedback> getPagedFeedback(int page, int size);
    UUID deleteFeedbackByUUID(UUID uuid);
}
