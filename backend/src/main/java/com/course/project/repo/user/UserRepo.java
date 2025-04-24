package com.course.project.repo.user;


import com.course.project.entity.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepo extends JpaRepository<MyUser, UUID> {
    MyUser findByUsername(String username);
}
