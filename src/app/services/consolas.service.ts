import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {

  private apiURL = 'https://api-consola.onrender.com';  // URL de la API

  // Configuración de cabeceras
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  // Obtener todas las consolas
  getConsolas(): Observable<any> {
    return this.http.get(`${this.apiURL}/`, this.httpOptions)
      .pipe(
        retry(3),  // Reintentar hasta 3 veces si falla
        catchError(this.handleError)
      );
  }

  // Obtener consola por ID
  getConsolaById(id: number): Observable<any> {
    // Verifica si la consola ya está en el Local Storage
    const cachedConsola = localStorage.getItem(`consola_${id}`);
    if (cachedConsola) {
      return of(JSON.parse(cachedConsola)); // Devuelve la consola desde Local Storage
    } else {
      // Si no está en Local Storage, realiza la solicitud HTTP
      return this.http.get(`${this.apiURL}/${id}`, this.httpOptions)
        .pipe(
          retry(3),
          tap(data => {
            // Almacena en Local Storage después de obtener la consola
            localStorage.setItem(`consola_${id}`, JSON.stringify(data));
          }),
          catchError(this.handleError)
        );
    }
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(`Servidor retornó código ${error.status}, ` + `cuerpo fue: ${error.error}`);
    }
    return throwError('Algo malo sucedió; por favor intenta nuevamente más tarde.');
  }

  // Método opcional para limpiar el Local Storage de una consola
  clearConsolaFromLocalStorage(id: number): void {
    localStorage.removeItem(`consola_${id}`);
  }
}
