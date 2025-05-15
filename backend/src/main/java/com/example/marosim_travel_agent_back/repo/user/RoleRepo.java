package com.example.marosim_travel_agent_back.repo.user;

import com.example.marosim_travel_agent_back.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoleRepo extends JpaRepository<Role, Long> {
    List<Role> findAllByName(String name);
}
