import { Component, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Instructor } from '../instructor.model';
import { InstructorService } from '../instructor.service';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-instructor-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, DataViewModule, ButtonModule, DividerModule],
  templateUrl: './instructor-list.component.html',
  styleUrl: './instructor-list.component.css'
})
export class InstructorListComponent implements OnInit{
  instructors: Instructor[] = [];
  modify = false;

  constructor(private instructorService: InstructorService, private route: Router, private location: Location){}

  ngOnInit(): void {
    console.log(this.modify);
    this.instructorService.getAllInstructors().subscribe(data => {
      this.instructors = data;
    })
  }

  deleteInstructor(id: string |undefined): void{
    this.instructorService.deleteInstructor(id).subscribe(() => {
      this.ngOnInit();
    })
  }

  loadInstructor(id: string){
    this.route.navigate(['/instructors/',id]);
  }

  editInstructor(id: string){
    this.route.navigate(['/instructors/update',id]);
  }

  addInstructorLink(){
    this.route.navigate(['/instructors/create']);
  }

  goBack(){
    this.location.back();
  }
}
