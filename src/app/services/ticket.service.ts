import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // CAMBIAR POR VARIABLE ENVIRONMENT
  private url = `http://127.0.0.1:5000/tickets`

  constructor(private httpClient: HttpClient) { }

  getAllTickets(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}`)
  }

  createTicket(ticket: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}`, ticket);
  }

  getTicketsByPriorityToAdministration(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/pending`)
  }

  /*
  closeTicket(ticketId: string): Observable<any> {
    return this.httpClient.patch<any>(`${this.url}/${}`)
  }*/

}
