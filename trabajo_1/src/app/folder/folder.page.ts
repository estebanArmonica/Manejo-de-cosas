import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit{
  public folder!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public navegaUno() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Reina Meve',
        precio: '800',
        faccion: 'Reinos de Norte',
        habilidad: 'Despliegue',
        imagen: ''
      }
    });
  }

  public navegaDos() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Geralt The Rivia',
        precio: '1000',
        faccion: 'Brujo',
        habilidad: 'Despliegue',
        imagen: ''
      }
    });
  }

  public navegaTres() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Palabra Runica',
        precio: '1200',
        faccion: 'Reino del Norte',
        habilidad: 'Crear y Escudo',
        imagen: ''
      }
    });
  }

  public navegaCuatro() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Caballero Andante',
        precio: '560',
        faccion: 'Reino del Norte',
        habilidad: 'Gracia, Escudo, Imbuida',
        imagen: ''
      }
    });
  }

  public navegaCinco() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Ahumadlos',
        precio: '340',
        faccion: 'Reino del Norte',
        habilidad: 'Generar',
        imagen: ''
      }
    });
  }

  public navegaSeis() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Oso Anciano',
        precio: '1000',
        faccion: 'Bestia',
        habilidad: 'Ninguna Habilidad',
        imagen: ''
      }
    });
  }

  public navegaSiete() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Infanteria de Tridam',
        precio: '600',
        faccion: 'Reino del Norte',
        habilidad: 'Potenciador y ataque',
        imagen: ''
      }
    });
  }

  public navegaOcho() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Masacrador de Aedirn',
        precio: '1000',
        faccion: 'Reino del Norte',
        habilidad: 'Orden (cuerpo a cuerpo)',
        imagen: ''
      }
    });
  }

  public navegaNueve() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Estudiante de Ban Ard',
        precio: '2000',
        faccion: 'Reino del Norte',
        habilidad: 'Paciencia (cuerpo a cuerpo)',
        imagen: ''
      }
    });
  }

  public navegaDies() {
    this.router.navigate(['/lista-p'], {
      queryParams: {
        nombre: 'Estudiante de Aretusa',
        precio: '3000',
        faccion: 'Reino del Norte',
        habilidad: 'Paciencia (cuerpo a cuerpo)',
        imagen: ''
      }
    });
  }

  public navegarPath(){
    this.router.navigate(
      [
        '/obligatorio',
        'Guerra entre cartas y facciones'
      ]
    )
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }


}
