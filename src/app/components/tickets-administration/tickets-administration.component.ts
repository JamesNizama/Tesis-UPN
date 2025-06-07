import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/cl-ticket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets-administration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets-administration.component.html',
  styleUrl: './tickets-administration.component.css'
})
export class TicketsAdministrationComponent {

  tickets: any[] = [];

  ticketSeleccionado: any;

  constructor(private ticketService: TicketService){}

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets(): void {
    this.ticketService.getTicketsByPriorityToAdministration().subscribe(rs => {
      this.tickets = rs;
    }, err => {
      console.log(err);
    })
  }

  seleccionarTicket(ticket: any): void {
    this.ticketSeleccionado = ticket;
  }

}
