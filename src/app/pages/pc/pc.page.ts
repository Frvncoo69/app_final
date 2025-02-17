import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.page.html',
  styleUrls: ['./pc.page.scss'],
})
export class PcPage implements OnInit {

  productosP: any[] = []; // Arreglo para almacenar los productos

  constructor(private alertController: AlertController, private serviceBD: ServiceBDService, private router: Router) { }

  
  async ionViewWillEnter() {
    this.cargarProductos(); // Cargar productos al inicializar
  }
  async ngOnInit() {
    this.cargarProductos(); // Cargar productos al inicializar
  }

    // Función para obtener todos los productos
    cargarProductos() {
      this.serviceBD.seleccionarPC().then((productos) => {
        this.productosP = productos;
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

    irpcSolo(x: any) {
      let navigationExtras: NavigationExtras = {
        state: {
          pcVa: x
        }
      };
      this.router.navigate(['/pc1'], navigationExtras);
    }

}
