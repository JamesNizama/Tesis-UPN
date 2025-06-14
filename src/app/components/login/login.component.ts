import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Validación simulada
    /*
    if (this.email === 'admin' && this.password === '123') {
      this.loginError = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }*/

    sessionStorage.setItem('username', this.email);
    this.router.navigate(['/dashboard']);
  }

}
