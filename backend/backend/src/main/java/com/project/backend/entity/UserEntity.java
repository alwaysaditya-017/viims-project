package com.project.backend.entity;

import java.util.UUID;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {
	
	@Id
    @GeneratedValue
    private UUID id;

    @Column(unique = true)
    private String email;

    private String password;

   
}
