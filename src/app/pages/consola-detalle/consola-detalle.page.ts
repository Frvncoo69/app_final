import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from 'src/app/services/consolas.service';
import { firstValueFrom } from 'rxjs';  // Importa firstValueFromng

@Component({
  selector: 'app-consola-detalle',
  templateUrl: './consola-detalle.page.html',
  styleUrls: ['./consola-detalle.page.scss'],
})
export class ConsolaDetallePage implements OnInit {
  consola: any;

  constructor(
    private route: ActivatedRoute,
    private consolasService: ConsolasService
  ) { }

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarConsola(id);
  }

  async cargarConsola(id: number) {
    try {
      this.consola = await firstValueFrom(this.consolasService.getConsolaById(id));
      console.log('Consola cargada:', this.consola); // Verificación en consola
    } catch (error) {
      console.error('Error al cargar consola:', error);
    }
  }
}
