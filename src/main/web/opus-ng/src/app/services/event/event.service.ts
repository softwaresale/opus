import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CalendarEvent } from 'angular-calendar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllForRange(start: Date, end: Date): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(`${environment.apiBaseUrl}/api/v1/events`, {
      params: {
        start: start.toISOString(),
        end: end.toISOString(),
      }
    }).pipe(
      map(events => events.map(event => ({ ...event, start: new Date(event.start), end: new Date(event.end) })))
    );
  }

  getEventForClass(classId: number) {
    return this.http.get<CalendarEvent[]>(`${environment.apiBaseUrl}/api/v1/events/map`, {
      params: {
        classId: classId.toString()
      }
    }).pipe(
      map(events => events.map(event => ({ ...event, start: new Date(event.start), end: new Date(event.end) })))
    );
  }
}
