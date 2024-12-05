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

  // Cargar productos desde localStorage o API
  async cargarProductos() {
    // Verificar si los productos están guardados en localStorage
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
      // Si los productos están en localStorage, cargarlos
      this.productos = JSON.parse(productosGuardados);
      this.productosFiltrados = [...this.productos];
      console.log('Productos cargados desde localStorage');
    } else {
      // Si no están, hacer la solicitud a la API
      try {
        this.productos = await this.bdService.obtenerTodosLosProductos();
        this.productosFiltrados = [...this.productos];
        // Guardar los productos en localStorage para futuras consultas
        localStorage.setItem('productos', JSON.stringify(this.productos));
        console.log('Productos cargados desde la API');
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    }
  }

  // Cargar consolas desde localStorage o API
  async cargarConsolas() {
    // Verificar si las consolas están guardadas en localStorage
    const consolasGuardadas = localStorage.getItem('consolas');
    if (consolasGuardadas) {
      // Si las consolas están en localStorage, cargarlas
      this.consolasFiltradas = JSON.parse(consolasGuardadas);
      console.log('Consolas cargadas desde localStorage');
    } else {
      // Si no están, hacer la solicitud a la API
      try {
        const consolas = await firstValueFrom(this.consolasService.getConsolas());
        this.consolasFiltradas = consolas || [];
        // Guardar las consolas en localStorage para futuras consultas
        localStorage.setItem('consolas', JSON.stringify(this.consolasFiltradas));
        console.log('Consolas cargadas desde la API');
      } catch (error) {
        console.error('Error al cargar consolas:', error);
        this.consolasFiltradas = [];
      }
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
