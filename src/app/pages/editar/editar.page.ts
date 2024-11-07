import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  rut: string = ''; 
  nombre: string = '';
  apellido: string = '';
  nombreUsuario: string = '';
  correo: string = '';
  idUsuario: string = ''; 

  constructor(
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController,
    private dbService: ServiceBDService 
  ) { }

  ngOnInit() {
    this.cargarDatosUsuario(); 
  }

  async cargarDatosUsuario() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.rut = userData.rut;
    this.nombre = userData.nombre;
    this.apellido = userData.apellido;
    this.correo = userData.correo;
    this.nombreUsuario = userData.nombreUsuario; 
    this.idUsuario = userData.id_usu; 
  }

  async guardarCambios() {
    // Validar que todos los campos estén llenos
    if (!this.nombre || !this.apellido || !this.nombreUsuario || !this.correo) {
      const alert = await this.alertController.create({
        header: 'Campos Vacíos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Actualizar usuario en la base de datos
    try {
      await this.dbService.modificarUsuario(this.idUsuario, this.nombre, this.apellido); 

      // Actualizar los datos en localStorage
      localStorage.setItem('userData', JSON.stringify({
        rut: this.rut,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        nombreUsuario: this.nombreUsuario,
        id_usu: this.idUsuario 
      }));

      // Mostrar toast de éxito
      const toast = await this.toastController.create({
        message: 'Cambios realizados',
        duration: 5000,
        position: 'bottom'
      });
      await toast.present();

      // Redirigir a la página de perfil
      this.router.navigate(['/perfil']);
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un problema al guardar los cambios. Intenta nuevamente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
