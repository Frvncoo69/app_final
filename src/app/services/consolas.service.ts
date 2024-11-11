import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {
  
  private apiURL = 'https://api-consola.onrender.com';  // URL de la API

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  // Método para obtener todas las consolas
  getConsolas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/`)  // Solicitud a la API
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // Obtener consola por ID
getConsolaById(id: number): Observable<any> {
  return this.http.get<any>(`${this.apiURL}/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error del lado del cliente:', error.error.message);
    } else {
      console.error(`El servidor retornó el código ${error.status}, cuerpo fue: ${error.error}`);
    }
    return throwError('Algo malo sucedió; por favor intenta nuevamente más tarde.');
  }
}
