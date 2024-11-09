import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.page.html',
  styleUrls: ['./mouse.page.scss'],
})
export class MousePage implements OnInit {

  productosMo: any[] = []; // Arreglo para almacenar los productos

  constructor(private alertController: AlertController, private serviceBD: ServiceBDService, private router: Router) { }

  
  async ionViewWillEnter() {
    this.cargarProductos(); // Cargar productos al inicializar
  }
  async ngOnInit() {
    this.cargarProductos(); // Cargar productos al inicializar
  }

    // Función para obtener todos los productos
    cargarProductos() {
      this.serviceBD.seleccionarMouse().then((productos) => {
        this.productosMo = productos;
      }).catch((error) => {
        console.error('Error al cargar los productos:', error);
      });
    }

    irproductoSolo(x: any) {
      let navigationExtras: NavigationExtras = {
        state: {
          productoVa: x
        }
      };
      this.router.navigate(['/detalle-producto'], navigationExtras);
    }
}
