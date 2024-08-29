import { Component, OnInit } from '@angular/core';
import { TrainerEvent } from '../event.model';
import { CommonModule, Location } from '@angular/common';
import { Instructor } from '../../instructor/instructor.model';
import { TrainerEventService } from '../event.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { InstructorService } from '../../instructor/instructor.service';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class TrainerEventDetailComponent implements OnInit{
  event: TrainerEvent | undefined;
  instructor: Instructor = {};

  constructor(private eventService: TrainerEventService, private instructorService: InstructorService, private location: Location,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.eventService.getTrainerEvent(id).subscribe( data => {
      this.event = data;
      console.log(this.event);
      if(this.event?.trainer_id){
        this.instructorService.getInstructor(this.event.trainer_id).subscribe( data => {
          this.instructor = data;
          console.log(this.instructor)
        })
      }
      })
  }

  goBack(){
    this.location.back();
  }
}

