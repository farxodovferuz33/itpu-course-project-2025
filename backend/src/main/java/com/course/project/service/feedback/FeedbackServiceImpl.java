package com.course.project.service.feedback;

import com.course.project.dto.feedback.FeedbackSaveDto;
import com.course.project.entity.feedback.Feedback;
import com.course.project.repo.feedback.FeedbackRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {
    private final FeedbackRepo feedbackRepo;

    @Override
    public Feedback saveFeedback(FeedbackSaveDto feedbackSaveDto) {
        return feedbackRepo.save(
                Feedback.builder()
                        .fullName(feedbackSaveDto.fullName())
                        .phoneNumber(feedbackSaveDto.phoneNumber())
                        .email(feedbackSaveDto.email())
                        .feedback(feedbackSaveDto.feedback())
                        .build()
        );
    }

    @Override
    public Page<Feedback> getPagedFeedback(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Feedback> all = feedbackRepo.findAll(pageable);
        return all;
    }


    @Override
    public UUID deleteFeedbackByUUID(UUID uuid) {
        feedbackRepo.deleteById(uuid);
        return uuid;
    }
}
