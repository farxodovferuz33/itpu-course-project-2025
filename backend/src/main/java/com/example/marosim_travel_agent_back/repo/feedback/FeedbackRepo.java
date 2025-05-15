package com.example.marosim_travel_agent_back.repo.feedback;

import com.example.marosim_travel_agent_back.entity.feedback.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, UUID> {
}
