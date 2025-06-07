import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Ticket } from '../../models/cl-ticket';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // necesario para ngModel
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

  ticketForm?: FormGroup

  constructor(private ticketService: TicketService, private formBuilder: FormBuilder, ) {
    this.createForm();
  }

  createForm(): void {
    this.ticketForm = this.formBuilder.group({
      career: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      description: ['', [Validators.required]],
      student_comments: [''],
      channel: ['', [Validators.required]],
    //  estado: 'pendiente',
    //  fechaCreacion: new Date()
    })
  }

  enviarTicket(): void {

    console.log(this.ticketForm);

    if (!this.ticketForm?.valid) {
      alert('Por favor complete los campos obligatorios.');
      return;
    }

    this.ticketService.createTicket(this.ticketForm.value).subscribe({
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
    this.ticketForm?.patchValue({
      career: [''],
      categoria: [''],
      description: [''],
      student_comments: [''],
      channel: [''],
    })
  }

  cancelar() {
    // Aquí decides si limpiar o cerrar formulario o redirigir
    this.limpiarFormulario();
  }

}
