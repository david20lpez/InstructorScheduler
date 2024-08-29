/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.controllers;

import com.example.demo.entities.Event;
import com.example.demo.entities.Instructor;
import com.example.demo.services.InstructorService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author david
 */
@RequestMapping("/instructor")
@RestController
@CrossOrigin (origins = "*")
public class InstructorController {
    @Autowired
    private InstructorService instructorService;
    
    @GetMapping
    public ResponseEntity<List<Instructor>> getAll(){
        List<Instructor> instructors = instructorService.getAll();
        return new ResponseEntity<>(instructors,HttpStatus.OK);
    }
    
    @GetMapping(path = "/{id}")
    public ResponseEntity<Instructor> get(@PathVariable String id){
        Instructor t = instructorService.getById(id);
        return new ResponseEntity<>(t,HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<Instructor> create(@RequestBody Instructor t){
        Instructor trainer = instructorService.createInstructor(t);
        return new ResponseEntity<>(trainer,HttpStatus.CREATED);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<Instructor> update(@RequestBody Instructor t){
        Instructor trainer = instructorService.updateInstructor(t);
        return new ResponseEntity<>(trainer,HttpStatus.ACCEPTED);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id){
        instructorService.deleteInstructor(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
