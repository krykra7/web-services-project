package com.krawczyk.wiese.project.repository;

import com.krawczyk.wiese.project.model.Industry;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IndustryRepository extends JpaRepository<Industry, Long> {
    void deleteById(Long id);
}
