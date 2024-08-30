import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrainerEvent } from '../event.model';
import { TrainerEventService } from '../event.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, DataViewModule, ButtonModule, DividerModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class TrainerEventListComponent implements OnInit{
  events: TrainerEvent[] = [];

  constructor(private eventService: TrainerEventService, private route: Router, private location: Location,
  ){}

  ngOnInit(): void {
    this.eventService.getAllTrainerEvents().subscribe(data => {
      this.events = data;
    })
  }

  deleteTrainerEvent(id: number | undefined){
    this.eventService.deleteTrainerEvent(id).subscribe(() => {
      this.ngOnInit();
    })
  }

  loadTrainerEvent(id: string){
    this.route.navigate(['/events/',id]);
  }

  editTrainerEvent(id: string){
    this.route.navigate(['/events/update',id]);
  }

  addEventLink(){
    this.route.navigate(['/eventss/create']);
  }

  goBack(){
    this.location.back();
  }
}
