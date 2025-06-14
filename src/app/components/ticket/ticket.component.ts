import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/cl-ticket';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {

  tickets: any[] = [];

  ticketSeleccionado: any;

  constructor(private ticketService: TicketService, private route: Router){}

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets(): void {
    this.ticketService.getAllTickets().subscribe(rs => {
      this.tickets = rs;
    }, err => {
      console.log(err);
    })
  }

  seleccionarTicket(ticket: any): void {
    this.ticketSeleccionado = ticket;
  }

  verDetalle(ticket: any): void {
    this.route.navigate(['/dashboard/estado/' + ticket._id.$oid]);
  }



}
