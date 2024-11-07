// camara-perfil.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class CamaraPerfilService {
  constructor() {}

  // Captura una foto con la cámara y devuelve la imagen en formato base64
  async tomarFoto(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    return `data:image/jpeg;base64,${image.base64String}`;
  }

  // Selecciona una imagen de la galería y devuelve la imagen en formato base64
  async seleccionarImagen(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos, // Indica que la fuente es la galería
    });
    return `data:image/jpeg;base64,${image.base64String}`;
  }
}

