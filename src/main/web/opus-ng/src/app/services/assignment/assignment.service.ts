import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from './assignment.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${environment.apiBaseUrl}/api/v1/assignments`);
  }

  getById(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${environment.apiBaseUrl}/api/v1/assignments/${id}`);
  }
}
