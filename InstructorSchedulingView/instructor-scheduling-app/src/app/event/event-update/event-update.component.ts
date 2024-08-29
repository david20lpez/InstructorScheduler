import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrainerEventService } from '../event.service';
import { TrainerEvent } from '../event.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-event-update',
  standalone: true,
  imports: [CalendarModule, FormsModule, ButtonModule],
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css'
})
export class TrainerEventUpdateComponent implements OnInit{

  event: TrainerEvent = {};

  constructor(private location: Location, private eventService: TrainerEventService, private route: ActivatedRoute, 
    private router: Router){}

  getEvent(){
    const id = this.route.snapshot.paramMap.get('id')!;
    this.eventService.getTrainerEvent(id).subscribe( data => {
      this.event = data;
      this.event.start_date = new Date();
      this.event.end_date = new Date();
      console.log(this.event);
    })
  }

  ngOnInit(): void {
    this.getEvent();
  }

  updateEvent(){
    this.eventService.updateTrainerEvent(this.event).subscribe(() => {
      this.router.navigate(['/events']);
    })
  }
  
  goBack(){
    this.location.back();
  }
}
