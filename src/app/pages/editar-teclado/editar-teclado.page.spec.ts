import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBDService {
  public database!: SQLiteObject;
  private listadoTeclados = new BehaviorSubject<any[]>([]); // Observable para teclados

  constructor() { }

  // Método para obtener un producto por su ID (teclado en este caso)
  obtenerProductoPorId(id: string) {
    return this.database.executeSql('SELECT * FROM producto WHERE id_producto = ?', [id])
      .then(res => {
        if (res.rows.length > 0) {
          return {
            id_producto: res.rows.item(0).id_producto, // ID del producto
            nombre_prod: res.rows.item(0).nombre_prod,
            precio_prod: res.rows.item(0).precio_prod,
            stock_prod: res.rows.item(0).stock_prod,
            descripcion_prod: res.rows.item(0).descripcion_prod,
            foto_prod: res.rows.item(0).foto_prod // Imagen del producto
          };
        }
        return null;
      })
      .catch(e => {
        console.error('Error al obtener el producto por ID:', e);
        throw e;
      });
  }

  // Método para modificar un producto (incluyendo la imagen)
  modificarProducto(id: number, nombre: string, precio: number, stock: number, descripcion: string, imagen: Blob | string) {
    return this.database.executeSql(
      'UPDATE producto SET nombre_prod = ?, precio_prod = ?, stock_prod = ?, descripcion_prod = ?, foto_prod = ? WHERE id_producto = ?',
      [nombre, precio, stock, descripcion, imagen, id]
    ).then(res => {
      console.log('Producto modificado correctamente');
      this.seleccionarProductos(); // Actualizar lista de productos después de la modificación
    }).catch(e => {
      console.error('Error al modificar el producto:', e);
      throw e;
    });
  }

  // Seleccionar todos los productos (incluyendo teclados)
  seleccionarProductos() {
    return this.database.executeSql('SELECT * FROM producto', []).then(res => {
      let items: any[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_producto: res.rows.item(i).id_producto,
            nombre_prod: res.rows.item(i).nombre_prod,
            precio_prod: res.rows.item(i).precio_prod,
            stock_prod: res.rows.item(i).stock_prod,
            descripcion_prod: res.rows.item(i).descripcion_prod,
            foto_prod: res.rows.item(i).foto_prod
          });
        }
      }
      this.listadoTeclados.next(items as any[]); // Actualizamos la lista de teclados
    }).catch(e => {
      console.error('Error al seleccionar productos:', e);
      throw e;
    });
  }

  // Devuelve un observable para los productos/teclados
  fetchTeclados() {
    return this.listadoTeclados.asObservable();
  }
}
