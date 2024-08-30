import { Component, OnInit, ViewChild } from '@angular/core';
import { Instructor } from '../instructor.model';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { InstructorService } from '../instructor.service';
import { CommonModule, Location } from '@angular/common';
import dayGridPlugin from '@fullcalendar/daygrid'; // Import dayGridPlugin
import interactionPlugin from '@fullcalendar/interaction'; // Import interactionPlugin
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TrainerEventService } from '../../event/event.service';

@Component({
  selector: 'app-instructor-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FullCalendarModule],
  templateUrl: './instructor-detail.component.html',
  styleUrl: './instructor-detail.component.css'
})
export class InstructorDetailComponent implements OnInit{

  events: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    eventClick: this.handleEventClick.bind(this) // Bind the event handler
  };

  constructor(private route: ActivatedRoute, private instructorService: InstructorService, private location: Location,
    private eventService: TrainerEventService
  ){}

  handleEventClick(info: any) {
    alert(`Event: ${info.event.title}\nDescription: ${info.event.extendedProps.description}`);
  }

  getEvents(){
    const id = this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventsByTrainer(id).subscribe( data => {
      this.calendarOptions.events = data.map(event => ({
        title: event.event_name,
        start: event.start_date,
        end: event.end_date,
        backgroundColor: 'lightblue',
        date: event.start_date,
        description: event.description
      }))
      console.log(this.calendarOptions.events);
    })
  }

  ngOnInit(): void {
    this.getEvents();
  }


  goBack(){
    this.location.back();
  }

}
