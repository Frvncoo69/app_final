import { Component, OnInit } from '@angular/core';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { ApiNativaService } from 'src/app/services/api-nativa.service';
import { ConsolasService } from 'src/app/services/consolas.service';
import { firstValueFrom } from 'rxjs';  // Importa firstValueFrom
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchTerm: string = '';
  productos: any[] = [];
  productosFiltrados: any[] = [];
  consolasFiltradas: any[] = [];

  constructor(
    private bdService: ServiceBDService,
    private consolasService: ConsolasService,
    private apiNativaService: ApiNativaService,
    private router: Router

  ) { }

  async ngOnInit() {
    await this.cargarProductos();
    await this.cargarConsolas();
  }

  async cargarProductos() {
    try {
      this.productos = await this.bdService.obtenerTodosLosProductos();
      this.productosFiltrados = [...this.productos];
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  }

  async cargarConsolas() {
    try {
      const consolas = await firstValueFrom(this.consolasService.getConsolas());
      this.consolasFiltradas = consolas || [];
      console.log('Consolas cargadas:', this.consolasFiltradas); // Verificación en consola
    } catch (error) {
      console.error('Error al cargar consolas:', error);
      this.consolasFiltradas = [];
    }
  }

  // Función para navegar a los detalles de la consola
  verDetalleConsola(id: number) {
    this.router.navigate(['/consola-detalle', id]);
  }


  buscarProducto(event: any) {
    const texto = event.target.value;
    this.productosFiltrados = texto.trim() === ''
      ? this.productos
      : this.productos.filter(producto => producto.nombre_prod.includes(texto));
  }

  redirectToIntel() {
    this.apiNativaService.openIntelPage();
  }

  redirectToAmd() {
    this.apiNativaService.openAmdPage();
  }
}
