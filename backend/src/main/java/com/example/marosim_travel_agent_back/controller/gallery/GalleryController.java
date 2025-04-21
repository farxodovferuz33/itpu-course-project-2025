package com.example.marosim_travel_agent_back.controller.gallery;

import com.example.marosim_travel_agent_back.dto.gallery.GallerySaveDto;
import com.example.marosim_travel_agent_back.entity.gallery.Gallery;
import com.example.marosim_travel_agent_back.service.gallery.GalleryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/gallery")
@RequiredArgsConstructor
public class GalleryController {
    private final GalleryService service;

    @PostMapping
    public HttpEntity<?> saveGallery(@RequestParam MultipartFile photo, String caption){
        try {
            Gallery savedGallery = service.saveGallery(new GallerySaveDto(photo, caption));
            return ResponseEntity.ok(savedGallery);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Unable to save gallery");
        }
    }


    @GetMapping
    public HttpEntity<?> getGallery(){
        try {
            List<Gallery> allGallery = service.getAllGallery();
            return ResponseEntity.ok(allGallery);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Server error to get galleries");
        }
    }

    @DeleteMapping("/{uuid}")
    public HttpEntity<?> deleteGallery(@PathVariable UUID uuid){
        try {
            UUID deletedGalleryByUUID = service.deleteGalleryByUUID(uuid);
            return ResponseEntity.ok(deletedGalleryByUUID);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Unable to delete");
        }
    }

}
