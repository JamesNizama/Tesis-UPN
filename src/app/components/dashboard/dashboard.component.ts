import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }

  logout() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se cerrará tu sesión y serás redirigido al login.',
      icon: 'warning',  // Usamos un icono de advertencia
      showCancelButton: true,  // Mostrar el botón de cancelar
      confirmButtonText: 'Sí, cerrar sesión',  // Texto del botón de confirmación
      cancelButtonText: 'Cancelar',  // Texto del botón de cancelación
    }).then((result) => {
      // Si el usuario confirma
      if (result.isConfirmed) {
        // Lógica para cerrar sesión aquí
        console.log('Sesión cerrada');
        
        // Redirigir al login usando el Router de Angular
        this.router.navigate(['/login']);  // Redirigir a la página de login
      } else {
        // Si el usuario cancela
        console.log('Cierre de sesión cancelado');
      }
    });
  }

}
