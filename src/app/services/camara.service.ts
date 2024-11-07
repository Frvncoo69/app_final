import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class CamaraService {
  constructor() {}

  // Función para capturar una foto con la cámara y devolverla como Blob
  async takePhoto(): Promise<Blob> {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera,
      quality: 90,
    });
    const response = await fetch(image.webPath!);
    return await response.blob();
  }

  // Función para seleccionar una imagen de la galería y devolverla como Blob
  async pickImage(): Promise<Blob> {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Photos,
      quality: 90,
    });
    const response = await fetch(image.webPath!);
    return await response.blob();
  }
}
