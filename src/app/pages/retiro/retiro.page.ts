import { Component, OnInit } from '@angular/core';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.page.html',
  styleUrls: ['./retiro.page.scss'],
})
export class RetiroPage implements OnInit {

  idUserLoggeao!: any;

  arregloVenta: any = [
    {
      id_venta: '',
      f_venta: '',
      total_venta: '',
      estado_retiro: '',
      id_usu: '',
      id_estado: '',
    }
  ]

  constructor(private bdService: ServiceBDService) { } // Inyección del servicio de alertas

  async ionViewWillEnter() {
    await this.cargarRetiros();
  }

  async ngOnInit() {}

  async cargarRetiros(){
    this.idUserLoggeao = await this.bdService.obtenerIdUsuarioLogueado();
    this.arregloVenta = await this.bdService.consultarRetiros(this.idUserLoggeao);
  }
}