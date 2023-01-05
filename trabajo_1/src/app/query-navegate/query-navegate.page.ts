import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-query-navegate',
  templateUrl: './query-navegate.page.html',
  styleUrls: ['./query-navegate.page.scss'],
})
export class QueryNavegatePage implements OnInit {

  public nombre:  String = '';
  public precio:  String = '';
  public faccion: String = '';
  public habilidad: String = '';
  public imagen: String = '';

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe(parametros =>  {
      this.nombre = parametros['nombre']|| 'Nombre no disponible';
      this.precio = parametros['precio']|| 'precio no disponible';
      this.faccion = parametros['faccion']|| 'Faccion no disponible';
      this.habilidad = parametros['habilidad']|| 'Habilidad no disponible';
      this.imagen = parametros['imagen']|| 'Imagen no disponible';

    });
  }

}
