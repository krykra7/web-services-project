package com.krawczyk.wiese.project.service.jpa;

import com.krawczyk.wiese.project.model.Industry;
import com.krawczyk.wiese.project.repository.IndustryRepository;
import com.krawczyk.wiese.project.service.IndustryCrudService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndustryJpaService implements IndustryCrudService {

    private final IndustryRepository industryRepository;

    @Autowired
    public IndustryJpaService(IndustryRepository industryRepository) {
        this.industryRepository = industryRepository;
    }

    @Override
    public List<Industry> findAll() {
        return industryRepository.findAll();
    }

    @Override
    public Industry save(Industry object) {
        return industryRepository.save(object);
    }

    @Override
    public void delete(Long id) {
        industryRepository.deleteById(id);
    }
}
