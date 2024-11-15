import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.page.html',
  styleUrls: ['./nueva.page.scss'],
})
export class NuevaPage implements OnInit {
  nuevaContrasena: string = '';
  validarContrasena: string = '';
  idUsuario: number = 0; // Almacena el id del usuario

  constructor(
    private router: Router,
    private serviceBD: ServiceBDService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Obtiene el id del usuario desde el estado de navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.idUsuario = navigation.extras.state['id_usu'];
    }
  }

  // Método para cambiar la contraseña
  async cambiarContrasena() {
    if (this.nuevaContrasena !== this.validarContrasena) {
      await this.mostrarAlerta('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try {
      await this.serviceBD.actualizarContrasena(this.idUsuario, this.nuevaContrasena);
      await this.mostrarAlerta('Éxito', 'Contraseña actualizada correctamente.');
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      await this.mostrarAlerta('Error', 'No se pudo actualizar la contraseña.');
    }
  }

  private async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
