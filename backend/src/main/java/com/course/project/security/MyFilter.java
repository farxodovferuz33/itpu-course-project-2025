package com.course.project.security;


import com.course.project.entity.MyUser;
import com.course.project.repo.user.UserRepo;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

@Component
@Configuration
@RequiredArgsConstructor
public class MyFilter extends OncePerRequestFilter {
    private final JwtService service;
    private final UserRepo repo;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorization = request.getHeader("Authorization");
        String token = request.getParameter("token");

        if (token != null) {
            Claims subject = service.extractJwt(token);
            String id = subject.getSubject();
            MyUser myUser = repo.findById(UUID.fromString(id)).get();

            UsernamePasswordAuthenticationToken usn =
                    new UsernamePasswordAuthenticationToken(
                            myUser.getUsername(),
                            myUser.getPassword(),
                            myUser.getAuthorities()
                    );

            SecurityContextHolder.getContext().setAuthentication(usn);

        }
        filterChain.doFilter(request, response);

    }
}
