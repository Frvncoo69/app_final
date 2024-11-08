import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class CamaraPerfilService {
  constructor() {}

  async tomarFoto(): Promise<string> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });
      return `data:image/jpeg;base64,${image.base64String}`;
    } catch (error) {
      console.error("Error al capturar la foto:", error);
      return ''; // Devuelve una cadena vacía si ocurre un error
    }
  }

  async seleccionarImagen(): Promise<string> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos,
      });
      return `data:image/jpeg;base64,${image.base64String}`;
    } catch (error) {
      console.error("Error al seleccionar la imagen:", error);
      return ''; // Devuelve una cadena vacía si ocurre un error
    }
  }
}
