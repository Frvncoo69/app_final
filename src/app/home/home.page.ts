import { Component, OnInit } from '@angular/core';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { ApiNativaService } from 'src/app/services/api-nativa.service'; // Importación del servicio ApiNativaService
import { ConsolasService } from 'src/app/services/consolas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchTerm: string = '';  // Valor del campo de búsqueda
  productos: any[] = [];  // Productos obtenidos de la base de datos
  productosFiltrados: any[] = [];  // Productos mostrados en la vista
  consolasFiltradas: any[] = [];  // Consolas obtenidas de la API

  constructor(private bdService: ServiceBDService,
     private consolasService: ConsolasService,
     private apiNativaService: ApiNativaService 
    ) {}

  async ngOnInit() {
    await this.cargarProductos();  // Cargar los productos al iniciar
    await this.cargarConsolas();  // Cargar las consolas al iniciar
  }

  // Método para cargar todos los productos desde la base de datos
  async cargarProductos() {
    try {
      this.productos = await this.bdService.obtenerTodosLosProductos();
      console.log('Productos cargados:', this.productos);  // Verificación en consola
      this.productosFiltrados = [...this.productos];  // Inicialmente, mostrar todos los productos
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  }

  // Método para cargar todas las consolas desde la API
  async cargarConsolas() {
    try {
      const consolas = await this.consolasService.getConsolas().toPromise();
      console.log('Consolas cargadas:', consolas);  // Verificación en consola
      this.consolasFiltradas = [consolas];  // Mostrar todas las consolas
    } catch (error) {
      console.error('Error al cargar consolas:', error);
    }
  }

  // Método para filtrar productos según el texto ingresado en la barra de búsqueda
  buscarProducto(event: any) {
    const texto = event.target.value;  // Obtener el texto tal como se ingresó

    // Si no hay texto en el campo de búsqueda, mostrar todos los productos
    if (texto.trim() === '') {
      this.productosFiltrados = this.productos;
    } else {
      // Filtrar los productos que coincidan con el texto ingresado
      this.productosFiltrados = this.productos.filter(producto =>
        producto.nombre_prod.includes(texto)  // Comparación sin conversión
      );
    }
  }


  // Métodos para redirigir a las páginas de Intel y AMD
  redirectToIntel() {
    this.apiNativaService.openIntelPage();
  }

  redirectToAmd() {
    this.apiNativaService.openAmdPage();
  }
}