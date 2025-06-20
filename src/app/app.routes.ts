import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelComponent } from './components/panel/panel.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { DetalleTicketComponent } from './components/detalle-ticket/detalle-ticket.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { TicketsAdministrationComponent } from './components/tickets-administration/tickets-administration.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'panel', pathMatch: 'full' }, 
      { path: 'panel', component: PanelComponent },
      { path: 'ticket', component: TicketComponent },
      { path: 'ticket-administration', component: TicketsAdministrationComponent },
      { path: 'new-ticket', component: NewTicketComponent },
      { path: 'estado/:id', component: DetalleTicketComponent },
      { path: 'encuesta', component: EncuestaComponent },
      { path: 'perfil', component: PerfilComponent },
    ]
  },
  { path: '**', redirectTo: '' }, 
];
