import { Component, OnInit } from '@angular/core';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  idUserLoggeao!: number;
  arregloVenta: any[] = [];

  constructor(private bdService: ServiceBDService) { }

  async ionViewWillEnter() {
    await this.cargarRetiros();
  }

  async ngOnInit() {}

  async cargarRetiros() {
    this.arregloVenta = await this.bdService.consultarRetiros2();
  }
}
