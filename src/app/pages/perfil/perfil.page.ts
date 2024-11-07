// PerfilPage.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamaraPerfilService } from 'src/app/services/camara-perfil.service';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  rut: string = '';
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  nombreUsuario: string = '';
  photoUrl: string = '/assets/icon/perfil.jpg';
  idUsuario: number = 0;

  constructor(
    private route: ActivatedRoute,
    private camaraPerfilService: CamaraPerfilService,
    private router: Router,
    private alertController: AlertController,
    private bdService: ServiceBDService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['idUsuario']) {
        this.idUsuario = params['idUsuario'];
        this.cargarDatosUsuario();
      }
    });
  }

  async cargarDatosUsuario() {
    try {
      const usuario = await this.bdService.obtenerUsuarioPorId(this.idUsuario);
      if (usuario) {
        this.rut = usuario.rut_usu;
        this.nombre = usuario.nombre_usu;
        this.apellido = usuario.apellido_usu;
        this.email = usuario.correo_usu;
        this.nombreUsuario = usuario.nombre_usuario;
        this.photoUrl = usuario.foto_usu || '/assets/icon/perfil.jpg';
      } else {
        await this.presentAlert('Error', 'Usuario no encontrado.');
      }
    } catch (error) {
      console.error('Error al cargar datos del usuario:', error);
      await this.presentAlert('Error', 'No se pudieron cargar los datos del usuario.');
    }
  }

  // Método para tomar o seleccionar una foto de perfil
  async updateProfilePhoto() {
    const alert = await this.alertController.create({
      header: 'Actualizar Foto de Perfil',
      message: 'Elige una opción para actualizar la foto de perfil',
      buttons: [
        {
          text: 'Tomar Foto',
          handler: async () => {
            const base64Image = await this.camaraPerfilService.tomarFoto();
            await this.guardarFotoPerfil(base64Image);
          },
        },
        {
          text: 'Elegir de Galería',
          handler: async () => {
            const base64Image = await this.camaraPerfilService.seleccionarImagen();
            await this.guardarFotoPerfil(base64Image);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

  // Método para guardar la foto de perfil en la base de datos
  private async guardarFotoPerfil(base64Image: string) {
    try {
      await this.bdService.actualizarFotoPerfil(this.idUsuario, base64Image);
      this.photoUrl = base64Image; // Muestra la imagen recién seleccionada
    } catch (error) {
      console.error('Error al actualizar la foto de perfil:', error);
      await this.presentAlert('Error', 'No se pudo actualizar la foto de perfil.');
    }
  }

  async cerrarSesion() {
    this.router.navigate(['/login']);
  }

  async eliminarPerfil() {
    const alert = await this.alertController.create({
      header: 'Eliminar Perfil',
      message: '¿Estás seguro de que deseas eliminar tu perfil? Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: async () => {
            try {
              if (this.idUsuario) {
                await this.bdService.eliminarUsuario(this.idUsuario.toString());
                this.router.navigate(['/login']);
              } else {
                throw new Error('ID de usuario no encontrado.');
              }
            } catch (error) {
              console.error('Error al eliminar el perfil:', error);
              await this.presentAlert('Error', 'Hubo un problema al eliminar tu perfil. Inténtalo de nuevo.');
            }
          },
        },
      ],
    });
    await alert.present();
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
