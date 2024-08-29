import { Component, Input, OnInit, viewChild, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InstructorListComponent } from "../instructor/instructor-list/instructor-list.component";

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [MenubarModule, InstructorListComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Instructors',
        icon: '',
        routerLink: '/instructors'
      },
      {
        label: 'Events',
        icon: '',
        routerLink: '/events'
      }
    ]
  }

}
