package com.example.marosim_travel_agent_back.security;

import com.example.marosim_travel_agent_back.entity.MyUser;
import com.example.marosim_travel_agent_back.entity.Role;
import com.example.marosim_travel_agent_back.repo.user.RoleRepo;
import com.example.marosim_travel_agent_back.repo.user.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.UUID;

@Configuration
@RequiredArgsConstructor
public class RunLoader implements CommandLineRunner {
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) {
        List<Role> allRoles = roleRepo.findAll();

        if (allRoles.isEmpty()) {
            List<Role> roles = List.of(
                    new Role(1L, "ROLE_ADMIN"),
                    new Role(2L, "ROLE_SUPER_ADMIN")
            );

            List<Role> saved = roleRepo.saveAll(roles);

            MyUser myUser = new
                    MyUser(UUID.randomUUID(), "FERUZ",
                    passwordEncoder.encode("123"), saved);
            userRepo.save(myUser);
        }

    }
}
