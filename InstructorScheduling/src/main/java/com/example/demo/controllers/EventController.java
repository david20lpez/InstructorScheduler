/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.controllers;

import com.example.demo.entities.Event;
import com.example.demo.services.EventService;
import java.sql.Timestamp;
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
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventService eventService;
    
    @PostMapping("/create")
    public ResponseEntity<Event> create(@RequestBody Event e){
        Timestamp t = new Timestamp(System.currentTimeMillis());
        e.setCreated_at(t);
        e.setModified_at(t);
        Event newEvent = eventService.create(e);
        return new ResponseEntity<>(newEvent,HttpStatus.CREATED);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<Event> update(@RequestBody Event e, @PathVariable int id){
        Event foundEvent = eventService.get(id);
        foundEvent.setDescription(e.getDescription());
        foundEvent.setStart_date(e.getStart_date());
        foundEvent.setEnd_date(e.getEnd_date());
        foundEvent.setTrainer_id(e.getTrainer_id());
        foundEvent.setEvent_name(e.getEvent_name());
        Timestamp t = new Timestamp(System.currentTimeMillis());
        foundEvent.setModified_at(t);
        Event updateEvent = eventService.update(foundEvent);
        return new ResponseEntity<>(updateEvent,HttpStatus.ACCEPTED);
    }
    
    @GetMapping(path = "/{id}")
    public ResponseEntity<Event> get(@PathVariable int id){
        Event e = eventService.get(id);
        return new ResponseEntity<>(e,HttpStatus.OK);
    }
    
    @GetMapping
    public ResponseEntity<List<Event>> getAll(){
        List<Event> events = eventService.getAll();
        return new ResponseEntity<>(events,HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable int id){
        eventService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/trainer/{id}")
    public ResponseEntity<List<Event>> getEvents(@PathVariable String id){
        List<Event> events = eventService.getEventsByTrainer(id);
        return new ResponseEntity<>(events,HttpStatus.OK);
    }
}
