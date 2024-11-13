import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.page.html',
  styleUrls: ['./listarusuarios.page.scss'],
})
export class ListarusuariosPage implements OnInit {

  usuarios: any[] = []; 

  constructor(private alertController: AlertController, private serviceBD: ServiceBDService, private router: Router) { }

  
  async ionViewWillEnter() {
    this.cargarUsuarios(); // Cargar productos al inicializar
  }
  async ngOnInit() {
    this.cargarUsuarios(); // Cargar productos al inicializar
  }

    // Función para obtener todos los productos
    cargarUsuarios() {
      this.serviceBD.seleccionarUsuarios().then((usuarios) => {
        this.usuarios = usuarios;
      }).catch((error) => {
        console.error('Error al cargar los usuarios:', error);
      });
    }
}
