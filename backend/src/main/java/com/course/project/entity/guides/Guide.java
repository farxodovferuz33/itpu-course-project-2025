package com.course.project.entity.guides;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "guides")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Guide {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(insertable = false, name = "id")
    private UUID uuid;
    @Column(nullable = false, name = "full_name")
    private String fullName;
    @Column(nullable = false, name = "description")
    private String description;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private GuidePhoto photo;
}
