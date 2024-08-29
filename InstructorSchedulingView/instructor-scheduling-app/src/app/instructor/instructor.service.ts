import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from './instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private baseUrl: string = "http://localhost:8081/scheduler/instructor";

  constructor(private http: HttpClient) {} 

  getAllInstructors(): Observable<Instructor[]>{
    return this.http.get<Instructor[]>(this.baseUrl);
  }

  getInstructor(id: string): Observable<Instructor>{
    return this.http.get<Instructor>(`${this.baseUrl}/${id}`);
  }

  addInstructor(instructor: Instructor): Observable<Instructor>{
    return this.http.post<Instructor>(`${this.baseUrl}/create`,instructor);
  }

  updateInstructor(instructor: Instructor): Observable<Instructor>{
    return this.http.put<Instructor>(`${this.baseUrl}/update/${instructor.trainer_id}`, instructor);
  }

  deleteInstructor(id: string | undefined): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
