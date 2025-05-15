package com.example.marosim_travel_agent_back.entity.feedback;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "feedbacks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(insertable = false, name = "id")
    private UUID uuid;
    @Column(nullable = false, name = "full_name")
    private String fullName;
    @Column(nullable = false, name = "phone_number")
    private String phoneNumber;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String feedback;
}
