import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/cl-ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly apiURL_Ticket = 'http://localhost:8080/api/tickets';

  constructor(private http: HttpClient) { }

  // Llamada a la API para listar todos los tickets
  public getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiURL_Ticket}/getAll`);
  }

  // Llamada a la API para guardar un ticket
  public saveTicket(ticket: Ticket): Observable<any> {
    return this.http.post<any>(`${this.apiURL_Ticket}/save`, ticket);
  }
}
