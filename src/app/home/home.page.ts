import { Component, OnInit } from '@angular/core';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchTerm: string = '';  // Valor del campo de búsqueda
  productos: any[] = [];  // Productos obtenidos de la base de datos
  productosFiltrados: any[] = [];  // Productos mostrados en la vista

  constructor(private bdService: ServiceBDService) {}

  async ngOnInit() {
    await this.cargarProductos();  // Cargar los productos al iniciar
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






}
