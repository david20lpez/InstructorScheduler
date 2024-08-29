import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainerEvent } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerEventService {

  private baseUrl: string = "http://localhost:8081/scheduler/event";

  constructor(private http: HttpClient) { }

  getAllTrainerEvents(): Observable<TrainerEvent[]>{
    return this.http.get<TrainerEvent[]>(this.baseUrl);
  }

  getTrainerEvent(id: string): Observable<TrainerEvent>{
    return this.http.get<TrainerEvent>(`${this.baseUrl}/${id}`);
  }

  getEventsByTrainer(id: string): Observable<TrainerEvent[]>{
    return this.http.get<TrainerEvent[]>(`${this.baseUrl}/trainer/${id}`);
  }

  addTrainerEvent(event: TrainerEvent): Observable<TrainerEvent>{
    return this.http.post<TrainerEvent>(`${this.baseUrl}/create`, event);
  }

  updateTrainerEvent(event: TrainerEvent): Observable<TrainerEvent>{
    return this.http.put<TrainerEvent>(`${this.baseUrl}/update/${event.event_id}`,event);
  }

  deleteTrainerEvent(id: number | undefined):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
