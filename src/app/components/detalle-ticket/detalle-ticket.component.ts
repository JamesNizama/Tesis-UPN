import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-ticket.component.html',
  styleUrl: './detalle-ticket.component.css'
})
export class DetalleTicketComponent {

  ticket: any;

  constructor(private ticketService: TicketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTicketDetails();
  }

  getTicketDetails(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
    if (ticketId) {
      this.ticketService.getTicketById(ticketId).subscribe(rs => {
        this.ticket = rs;
        console.log(rs);
      }, err => {
        console.log(err);
      });
    }
  }

  cancelTicket(): void {
    if (this.ticket && this.ticket._id && this.ticket._id.$oid) {
      this.ticketService.cancelTicket(this.ticket._id.$oid).subscribe(rs => {
        console.log('Ticket cancelled successfully');
        // Optionally, you can navigate back or show a success message
      }, err => {
        console.error('Error cancelling ticket:', err);
      });
    }
  }
  
  
  closeTicket(): void {
    if (this.ticket && this.ticket._id && this.ticket._id.$oid) {
      this.ticketService.closeTicket(this.ticket._id.$oid).subscribe(rs => {
        console.log('Ticket closed successfully');
        // Optionally, you can navigate back or show a success message
      }, err => {
        console.error('Error closing ticket:', err);
      });
    }
  }

}
