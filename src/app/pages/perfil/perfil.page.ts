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

  usuario: any = {
    id_usu: '',
    rut_usu: '',
    nombre_usu: '',
    apellido_usu: '',
    nombre_usuario: '', 
    clave_usu: '',
    correo_usu: '',
    foto_usu: '',
    estado_usu: '',
    loggeo: '',
    id_rol: '',
  };

  constructor(
    private route: ActivatedRoute,
    private camaraPerfilService: CamaraPerfilService,
    private router: Router,
    private alertController: AlertController,
    private bdService: ServiceBDService
  ) {}

  async ionViewWillEnter() {
    this.bdService.dbState().subscribe(data => {
      if (data) {
        this.cargarDatosUsuario(); // Cargar usuario cuando la base de datos esté lista
      }
    });
  }

  async ngOnInit() {
    this.cargarDatosUsuario();
    this.ionViewWillEnter(); // Llama a la carga de datos al iniciar
  }

  // Cargar datos del usuario y asignar foto de perfil
  async cargarDatosUsuario() {
    try {
      const usuariosConectados = await this.bdService.consultarUsuarioConectado();
      if (usuariosConectados.length > 0) {
        const usuarioActual = usuariosConectados[0];
  
        this.usuario = usuarioActual;
        this.rut = usuarioActual.rut_usu;
        this.nombre = usuarioActual.nombre_usu;
        this.apellido = usuarioActual.apellido_usu;
        this.email = usuarioActual.correo_usu;
        this.nombreUsuario = usuarioActual.nombre_usuario;
        this.idUsuario = usuarioActual.id_usu;
  
        // Manejar foto de perfil: verificar si es Blob o string
        if (usuarioActual.foto_usu) {
          if (typeof usuarioActual.foto_usu === 'string') {
            // Si es una cadena, asignar directamente
            this.photoUrl = usuarioActual.foto_usu;
          } else if (usuarioActual.foto_usu instanceof Blob) {
            // Si es un Blob, convertirlo a base64
            this.photoUrl = await this.blobToBase64(usuarioActual.foto_usu);
          }
        } else {
          this.photoUrl = '/assets/icon/perfil.jpg'; // Imagen por defecto si no hay foto
        }
      } else {
        await this.presentAlert('Error', 'No se pudieron cargar los datos del usuario (perfil).');
      }
    } catch (e) {
      await this.presentAlert('Error', `Error al cargar datos del perfil: ${e}`);
    }
  }
  
  // Función para convertir Blob a base64
  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  

  // Método para actualizar la foto de perfil
  async updateProfilePhoto() {
    const alert = await this.alertController.create({
      header: 'Actualizar Foto de Perfil',
      message: 'Elige una opción para actualizar la foto de perfil',
      buttons: [
        {
          text: 'Tomar Foto',
          handler: async () => {
            const base64Image = await this.camaraPerfilService.tomarFoto();
            if (base64Image) {
              await this.guardarFotoPerfil(base64Image);
            }
          },
        },
        {
          text: 'Elegir de Galería',
          handler: async () => {
            const base64Image = await this.camaraPerfilService.seleccionarImagen();
            if (base64Image) {
              await this.guardarFotoPerfil(base64Image);
            }
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

  // Guardar la foto de perfil en la base de datos y actualizar `photoUrl`
  private async guardarFotoPerfil(base64Image: string) {
    try {
      await this.bdService.actualizarFotoPerfil(this.idUsuario, base64Image); // Guarda en la BD en formato base64
      this.photoUrl = base64Image; // Actualiza la foto en el perfil actual
    } catch (error) {
      console.error('Error al actualizar la foto de perfil:', error);
      this.presentAlert('Error', 'No se pudo actualizar la foto de perfil.');
    }
  }

  async cerrarSesion() {
    if (this.usuario && this.usuario.correo_usu) {
      await this.bdService.actualizarEstadoUsuario2(this.usuario.correo_usu);
      this.presentAlert('Éxito', 'Sesión cerrada exitosamente.');
      this.usuario = null;
      this.router.navigate(['/login']);
    }
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
