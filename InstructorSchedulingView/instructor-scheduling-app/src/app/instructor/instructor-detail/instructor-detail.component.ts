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

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this) // Bind the event handler
  };

  constructor(private route: ActivatedRoute, private instructorService: InstructorService, private location: Location,
    private eventService: TrainerEventService
  ){}

  handleDateClick(arg: any) {
    alert('Description ' + arg.dateStr);
  }

  getEvents(){
    const id = this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventsByTrainer(id).subscribe( data => {
      this.calendarOptions.events = data.map(event => ({
        title: event.event_name,
        date: event.start_date
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
