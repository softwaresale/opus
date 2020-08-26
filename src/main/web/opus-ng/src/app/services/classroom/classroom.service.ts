import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from './classroom.model';
import { environment } from '../../../environments/environment';
import { Assignment } from '../assignment/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${environment.apiBaseUrl}/api/v1/classes`);
  }

  getById(id: number): Observable<Classroom> {
    return this.http.get<Classroom>(`${environment.apiBaseUrl}/api/v1/classes/${id}`);
  }

  getClassroomAssignments(id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${environment.apiBaseUrl}/api/v1/classes/${id}/assignments`);
  }

  create(classroom: Classroom) {
    return this.http.post<Classroom>(`${environment.apiBaseUrl}/api/v1/classes`, classroom);
  }

  addAssignment(classId: number, assignment: Assignment) {
    return this.http.post<Classroom>(`${environment.apiBaseUrl}/api/v1/classes/${classId}/assignments`, assignment);
  }
}
