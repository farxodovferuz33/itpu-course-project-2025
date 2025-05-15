package com.example.marosim_travel_agent_back.security;

import com.example.marosim_travel_agent_back.entity.MyUser;
import com.example.marosim_travel_agent_back.repo.user.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.ArrayList;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final UserRepo userRepo;
    private final MyFilter myFilter;

    private static final String[] _POST_ENDPOINT = {"/feedback"};
    private static final String[] _GET_ENDPOINT = {"/packets", "/guides", "/gallery", "/"};

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.
                cors(AbstractHttpConfigurer::disable).
                csrf(AbstractHttpConfigurer::disable).authorizeHttpRequests(auth ->
                        auth
                                .requestMatchers("/").permitAll()
                                .requestMatchers(HttpMethod.GET, "/packet/**").permitAll()
                                .requestMatchers(HttpMethod.GET, "/guide").permitAll()
                                .requestMatchers(HttpMethod.GET, "/packet").permitAll()
                                .requestMatchers(HttpMethod.GET, "/gallery").permitAll()
                                .requestMatchers("/feedback/**").permitAll()
                                .requestMatchers("/7a6ba797-9dca-4153-a071-3bc1183bc0c6/login").permitAll()
                                .anyRequest().authenticated()).addFilterBefore(myFilter, UsernamePasswordAuthenticationFilter.class);
        return httpSecurity.build();
    }


    @Bean
    public UserDetailsService userDetailsService() {
        return username -> {
            MyUser byUsername = userRepo.findByUsername(username);
            return new User(byUsername.getUsername(), byUsername.getPassword(), new ArrayList<>());
        };
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
