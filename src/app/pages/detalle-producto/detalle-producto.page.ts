import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , NavigationExtras} from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
    productoSolo: any;
  
    constructor(
      private bd: ServiceBDService, 
      private router: Router, 
      private activedroute: ActivatedRoute, 
    ) {
      this.activedroute.queryParams.subscribe((res) => {
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.productoSolo = this.router.getCurrentNavigation()?.extras?.state?.['productoVa'];
        }
      });
    }
  
    ngOnInit() {
      this.bd.dbState().subscribe(async (data) => {
        if (data) {
          
        }
      });
    }

    //async agregarCarrito() {
        //await this.bd.agregarDetalleVenta(
          //this.idVentaActiva,
          //this.productoVa.precio_prod,
          //this.productoVa.id_producto
        //);
}
  
