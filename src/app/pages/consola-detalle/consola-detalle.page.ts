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
    // Verificar si la consola está almacenada en localStorage
    const consolasGuardadas = localStorage.getItem('consolas');
    if (consolasGuardadas) {
      const consolas = JSON.parse(consolasGuardadas);
      this.consola = consolas.find((consola: any) => consola.id === id); // Buscar la consola por ID en el localStorage
      if (this.consola) {
        console.log('Consola cargada desde localStorage:', this.consola);
        return;
      }
    }

    // Si no está en localStorage, hacer la consulta a la API
    try {
      this.consola = await firstValueFrom(this.consolasService.getConsolaById(id));
      console.log('Consola cargada desde la API:', this.consola);
    } catch (error) {
      console.error('Error al cargar consola:', error);
    }
  }
}
