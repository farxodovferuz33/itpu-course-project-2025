package com.course.project.service.feedback;

import com.course.project.dto.feedback.FeedbackSaveDto;
import com.course.project.entity.feedback.Feedback;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface FeedbackService {
    Feedback saveFeedback(FeedbackSaveDto feedbackSaveDto);
    Page<Feedback> getPagedFeedback(int page, int size);
    UUID deleteFeedbackByUUID(UUID uuid);
}
