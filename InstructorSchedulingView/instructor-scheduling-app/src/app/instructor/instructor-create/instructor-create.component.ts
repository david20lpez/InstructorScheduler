import { Component } from '@angular/core';
import { Instructor } from '../instructor.model';
import { Router } from '@angular/router';
import { InstructorService } from '../instructor.service';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-instructor-create',
  standalone: true,
  imports: [FormsModule, CalendarModule, InputTextModule, ButtonModule],
  templateUrl: './instructor-create.component.html',
  styleUrl: './instructor-create.component.css'
})
export class InstructorCreateComponent {
  instructor: Instructor = {};

  constructor(private router: Router, private instructorService: InstructorService, private location: Location){
    this.instructor.birthday = new Date();
  }

  createInstructor(){
    this.instructorService.addInstructor(this.instructor).subscribe(() =>{
      this.router.navigate(['/instructors']);
    })
  }

  goBack(){
    this.location.back();
  }
}
