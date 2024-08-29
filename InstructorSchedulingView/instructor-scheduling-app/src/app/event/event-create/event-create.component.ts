import { Component, inject, Inject, OnInit } from '@angular/core';
import { TrainerEventService } from '../event.service';
import { TrainerEvent } from '../event.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Instructor } from '../../instructor/instructor.model';
import { InstructorService } from '../../instructor/instructor.service';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [FormsModule, DropdownModule,CalendarModule, InputTextModule, ButtonModule],
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.css'
})
export class TrainerEventCreateComponent implements OnInit{
  event: TrainerEvent = {};
  instructors: Instructor[] = [];
  instructor: Instructor = {};

  constructor(private eventService: TrainerEventService, private route: Router, private location: Location,
    private instructorService: InstructorService
  ){}

  addTrainerEvent(){
    this.event.trainer_id = this.instructor.trainer_id!;
    console.log(this.event);
    this.eventService.addTrainerEvent(this.event).subscribe( data => {
      this.route.navigate(['/events']);
    })
  }

  goBack(){
    this.location.back();
  }

  getInstructors(){
    this.instructorService.getAllInstructors().subscribe( data => {
      this.instructors = data;
    })
  }

  ngOnInit(): void {
    this.event.start_date = new Date();
    this.event.end_date = new Date();
    this.getInstructors();
  }

  onSelectChange(event: any){
    this.instructor = event.target.value;
  }

}
