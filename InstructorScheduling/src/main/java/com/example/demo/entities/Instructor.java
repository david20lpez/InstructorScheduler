/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.Data;

/**
 *
 * @author david
 */
@Data
@Entity
@Table(name = "instructor")
public class Instructor {
    @Id
    private String trainer_id;
    private String firstName;
    private String lastName;
    private Date birthday;
}
