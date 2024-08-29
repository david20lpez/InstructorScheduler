/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.services;

import com.example.demo.entities.Event;
import com.example.demo.repositories.EventRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author david
 */
@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    
    public Event create(Event e){
        return eventRepository.save(e);
    }
    
    public Event update(Event e){
        return eventRepository.save(e);
    }
    
    public Event get(int id){
        return eventRepository.findById(id).orElse(null);
    }
    
    public List<Event> getAll(){
        return eventRepository.findAll();
    }
    
    public void delete(int id){
        eventRepository.deleteById(id);
    }
    
    public List<Event> getEventsByTrainer(String id){
        return eventRepository.getEvents(id);
    }
}
