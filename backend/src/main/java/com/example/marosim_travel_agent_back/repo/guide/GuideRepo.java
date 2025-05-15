package com.example.marosim_travel_agent_back.repo.guide;

import com.example.marosim_travel_agent_back.entity.guides.Guide;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GuideRepo extends JpaRepository<Guide, UUID> {

}
