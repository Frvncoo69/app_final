import { Component, OnInit } from '@angular/core';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.page.html',
  styleUrls: ['./retiro.page.scss'],
})
export class RetiroPage implements OnInit {

  idUserLoggeao!: number;
  arregloVenta: any[] = [];

  constructor(private bdService: ServiceBDService) { }

  async ionViewWillEnter() {
    await this.cargarRetiros();
  }

  async ngOnInit() {}

  async cargarRetiros() {
    this.idUserLoggeao = await this.bdService.obtenerIdUsuarioLogueado();
    this.arregloVenta = await this.bdService.consultarRetiros(this.idUserLoggeao);
  }
}
