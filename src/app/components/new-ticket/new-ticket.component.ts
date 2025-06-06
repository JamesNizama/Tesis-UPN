import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Ticket } from '../../models/cl-ticket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule], // necesario para ngModel
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'] // corregido a plural
})
export class NewTicketComponent {

  carreras: string[] = [
    'Administración y Negocios Internacionales',
    'Administración y Servicios Turísticos',
    'Arquitectura',
    'Ciencias de la Comunicación',
    'Contabilidad y Finanzas',
    'Derecho',
    'Diseño Gráfico',
    'Enfermería',
    'Ingeniería Ambiental',
    'Ingeniería Civil',
    'Ingeniería de Sistemas Computacionales',
    'Ingeniería Industrial',
    'Ingeniería Mecatrónica',
    'Ingeniería de Software',
    'Marketing y Dirección Comercial',
    'Medicina Humana',
    'Psicología',
    'Negocios Internacionales',
    'Nutrición y Dietética'
  ];

  categorias: string[] = [
    'Matrículas',
    'Exámenes',
    'Clases en línea',
    'Pagos y Finanzas',
    'Accesos a sistemas',
    'Problemas de software',
    'Soporte técnico',
    'Cambio de contraseña',
    'Consultas académicas',
    'Instalación de software',
    'Cambio de datos personales',
    'Consultas generales',
    'Consulta de biblioteca',
    'Suministros',
    'Eventos y talleres'
  ];


  ticket: Partial<Ticket> = {
    carrera: '',
    categoria: '',
    descripcion: '',
    comentarioEstudiante: '',
    canal: '',
    estado: 'pendiente',
    fechaCreacion: new Date()
  };

  constructor(private ticketService: ServicesService) { }

  enviarTicket(): void {
    if (!this.ticket.categoria || !this.ticket.descripcion || !this.ticket.canal) {
      alert('Por favor complete los campos obligatorios.');
      return;
    }

    this.ticketService.saveTicket(this.ticket as Ticket).subscribe({
      next: (res) => {
        alert('Ticket enviado correctamente.');
        this.limpiarFormulario();
      },
      error: (err) => {
        console.error(err);
        alert('Error al enviar el ticket.');
      }
    });
  }

  limpiarFormulario() {
    this.ticket = {
      categoria: '',
      descripcion: '',
      comentarioEstudiante: '',
      canal: '',
      estado: 'pendiente',
      fechaCreacion: new Date()
    };
  }

  cancelar() {
    // Aquí decides si limpiar o cerrar formulario o redirigir
    this.limpiarFormulario();
  }

}
