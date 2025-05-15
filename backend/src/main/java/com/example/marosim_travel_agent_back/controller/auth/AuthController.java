package com.example.marosim_travel_agent_back.controller.auth;

import com.example.marosim_travel_agent_back.dto.LoginDto;
import com.example.marosim_travel_agent_back.entity.MyUser;
import com.example.marosim_travel_agent_back.repo.user.RoleRepo;
import com.example.marosim_travel_agent_back.repo.user.UserRepo;
import com.example.marosim_travel_agent_back.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/7a6ba797-9dca-4153-a071-3bc1183bc0c6")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody LoginDto dto){
        MyUser byUsername = userRepo.findByUsername(dto.username());
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        dto.username(),
                        dto.password()
                )
        );
        String jwt = jwtService.generateJwtToken(byUsername);
        return ResponseEntity.ok(jwt);
    }

    @GetMapping("/")
    public String homeBack(){
        return "HOME";
    }

}
