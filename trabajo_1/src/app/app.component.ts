import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    //query
    { title: 'Cuenta', url: '/cuenta', icon: 'person' },
    { title: 'Cerrar Sesion', url: '/login', icon: 'log-in' },
    { title: 'Acerca de', url: '/info', icon: 'chatbox' },
    { title: 'Contacto', url: '/contacto', icon: 'navigate' },
  ];
  constructor() {}
}
