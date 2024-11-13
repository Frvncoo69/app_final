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

  async ionViewWillEnter() {
    this.cargarDatosUsuario(); // Cargar productos al inicializar
  }

  ngOnInit() {
    this.cargarDatosUsuario(); 
  }

  async cargarDatosUsuario() {
    try {
      const userData = await this.dbService.obtenerUsuario(); // Fetch from DB
      if (userData) {
        this.idUsuario = userData.id_usu;
        this.rut = userData.rut_usu;
        this.nombre = userData.nombre_usu;
        this.apellido = userData.apellido_usu;
        this.correo = userData.correo_usu;
        this.nombreUsuario = userData.nombre_usuario;
      }
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo cargar los datos del usuario.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async guardarCambios() {
    if (!this.nombre || !this.apellido || !this.nombreUsuario || !this.correo) {
      const alert = await this.alertController.create({
        header: 'Campos Vacíos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    try {
      await this.dbService.modificarUsuario(this.idUsuario, this.nombre, this.apellido, this.nombreUsuario, this.correo); 

      const toast = await this.toastController.create({
        message: 'Cambios realizados',
        duration: 5000,
        position: 'bottom'
      });
      await toast.present();

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
