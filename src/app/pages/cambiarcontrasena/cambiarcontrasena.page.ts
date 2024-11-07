import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {
  correo: string = '';  // Almacena el correo del usuario logueado
  contrasenaIngresada: string = '';  // Almacena la contraseña ingresada

  constructor(
    private alertController: AlertController,
    private router: Router,
    private dbService: ServiceBDService
  ) { }

  ngOnInit() { 
    // Aquí podrías obtener el correo del usuario actual si está almacenado en localStorage o sesión
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.correo = userData.correo;
  }

  async verificarContrasena() {
    try {
      const usuario = await this.dbService.obtenerUsuarioPorCorreo(this.correo);
      
      if (usuario && usuario.clave_usu === this.contrasenaIngresada) {
        this.router.navigate(['/nuevacontrasena']); // Redirige si la contraseña es correcta
      } else {
        await this.presentAlert('Error', 'Contraseña incorrecta. Por favor, intente de nuevo.');
      }
    } catch (error) {
      console.error('Error al verificar la contraseña:', error);
      await this.presentAlert('Error', 'Hubo un problema al verificar la contraseña.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
