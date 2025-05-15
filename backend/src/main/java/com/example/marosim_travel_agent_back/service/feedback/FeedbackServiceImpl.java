package com.example.marosim_travel_agent_back.service.feedback;

import com.example.marosim_travel_agent_back.dto.feedback.FeedbackSaveDto;
import com.example.marosim_travel_agent_back.entity.feedback.Feedback;
import com.example.marosim_travel_agent_back.repo.feedback.FeedbackRepo;
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
