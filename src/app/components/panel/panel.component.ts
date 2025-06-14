import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services/services.service';
import { Ticket } from '../../models/cl-ticket';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit {
  stadistics: any;

  // dataSource: Ticket[] = [
  //   {
  //     idTicket: '1089',
  //     idUsuario: 'user123',
  //     categoria: 'Accesos a sistemas',
  //     descripcion: 'No puedo entrar al sistema académico',
  //     comentarioEstudiante: '',
  //     canal: 'web',
  //     estado: 'en_proceso',
  //     carrera: 'Ingeniería de Sistemas Computacionales',
  //     fechaCreacion: new Date('2025-06-06T09:00:00'),
  //   },
  //   {
  //     idTicket: '1085',
  //     idUsuario: 'user456',
  //     categoria: 'Consultas académicas',
  //     descripcion: 'Necesito mis documentos de matrícula',
  //     comentarioEstudiante: 'Para trámite externo',
  //     canal: 'correo',
  //     estado: 'abierto',
  //     carrera: 'Derecho',
  //     fechaCreacion: new Date('2025-06-05T14:30:00')
  //   },
  //   {
  //     idTicket: '1072',
  //     idUsuario: 'user789',
  //     categoria: 'Problemas de software',
  //     descripcion: 'Mi correo institucional no funciona',
  //     comentarioEstudiante: '',
  //     canal: 'presencial',
  //     estado: 'cerrado',
  //     carrera: 'Psicología',
  //     fechaCreacion: new Date('2025-06-03T08:15:00')
  //   }
  // ];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    //this.getAll();
    this.ticketService.getStadistics().subscribe(rs => {
      this.stadistics = rs;
      console.log(rs);
    })
  }

  /*
  getAll() {
    this.ticketService.getAllTickets().subscribe({
      next: (res) => {
        this.tickets = res;
      },
      error: (err) => {
        console.error('Error al cargar tickets:', err);
      }
    });
  }*/
}
