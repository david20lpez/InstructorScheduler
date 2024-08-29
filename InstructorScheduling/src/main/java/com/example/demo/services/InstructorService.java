/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.services;

import com.example.demo.entities.Event;
import com.example.demo.entities.Instructor;
import com.example.demo.repositories.InstructorRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

/**
 *
 * @author david
 */
@Service
public class InstructorService {
    @Autowired
    private InstructorRepository trainerRepository;
    
    public List<Instructor> getAll(){
        return trainerRepository.findAll();
    }
    
    public Instructor getById(String id){
        return trainerRepository.findById(id).orElse(null);
    }
    
    public Instructor updateInstructor(Instructor t){
        return trainerRepository.save(t);
    }
    
    public Instructor createInstructor(Instructor t){
        return trainerRepository.save(t);
    }
    
    public void deleteInstructor(String id){
        trainerRepository.deleteById(id);
    }
}
