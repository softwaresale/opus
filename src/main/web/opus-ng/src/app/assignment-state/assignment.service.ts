import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from './assignment.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private readonly baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = `${environment.apiBaseUrl}/assignments`;
  }

  getAll(): Observable<Assignment[]> {
    return this.httpClient.get<Assignment[]>(this.baseUrl);
  }

  getById(id: number): Observable<Assignment> {
    return this.httpClient.get<Assignment>(`${this.baseUrl}/${id}`);
  }

  create(assignment: Assignment): Observable<Assignment> {
    return this.httpClient.post<Assignment>(this.baseUrl, assignment);
  }

  update(assignment: Assignment): Observable<Assignment> {
    return this.httpClient.put<Assignment>(this.baseUrl, assignment);
  }
}
