import { Component, OnInit } from '@angular/core';
import { Instructor } from '../instructor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../instructor.service';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-instructor-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './instructor-update.component.html',
  styleUrl: './instructor-update.component.css'
})
export class InstructorUpdateComponent implements OnInit{
  instructor: Instructor = {};

  constructor(private route: ActivatedRoute, private instructorService: InstructorService, private router: Router,
    private location: Location
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.instructorService.getInstructor(id).subscribe(data => {
      this.instructor = data;
    })
  }

  updateInstructor(){
    if(this.instructor){
      this.instructorService.updateInstructor(this.instructor).subscribe(() => {
        this.router.navigate(['/instructors']);
      })
    }
  }

  goBack(){
    this.location.back();
  }
}
