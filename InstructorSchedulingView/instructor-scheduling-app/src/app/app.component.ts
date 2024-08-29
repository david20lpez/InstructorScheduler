import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'instructor-scheduling-app';

  items: MenuItem[] = [];

 ngOnInit(): void {
   this.items = [
    {
      label: 'Instructors',
      icon: 'pi pi-user',
      routerLink: '/instructors'
    },
    {
      label: 'Admin',
      icon: 'pi pi-spin pi-cog',
      routerLink: '/administration'
    }
   ]
 }
}
