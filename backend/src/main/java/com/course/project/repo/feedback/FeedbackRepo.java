package com.course.project.repo.feedback;

import com.course.project.entity.feedback.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, UUID> {
}
