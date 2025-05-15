package com.example.marosim_travel_agent_back.repo.user;


import com.example.marosim_travel_agent_back.entity.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepo extends JpaRepository<MyUser, UUID> {
    MyUser findByUsername(String username);
}
