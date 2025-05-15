package com.example.marosim_travel_agent_back.security;


import com.example.marosim_travel_agent_back.entity.MyUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;
import java.util.UUID;

@Service
public class JwtService {
    private SecretKey getSigninKey() {
        byte[] decode = Decoders.BASE64.decode("TdHrzFRBCOZKK0p1sQCUiEksaVNUV45i1sQpKnyxwg4");
        return Keys.hmacShaKeyFor(decode);
    }

    public String generateJwtToken(MyUser byUsername) {
        UUID id = byUsername.getId();

        Map<String, String> claims = Map.of("username", byUsername.getUsername(),
                "password", byUsername.getPassword());

        String jwt = Jwts.builder()
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24))
                .issuedAt(new Date())
                .subject(String.valueOf(id))
                .signWith(getSigninKey())
                .claims(claims)
                .compact();
        return jwt;
    }

    public Claims extractJwt(String authorization) {
        Claims payload = Jwts.parser().verifyWith(getSigninKey()).build().parseSignedClaims(authorization)
                .getPayload();
        System.out.println(payload.getSubject());
        return payload;
    }
}
