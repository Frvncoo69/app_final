import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.page.html',
  styleUrls: ['./listarusuarios.page.scss'],
})
export class ListarusuariosPage implements OnInit {

  usuarios: any[] = []; 

  constructor(private alertController: AlertController, private serviceBD: ServiceBDService, private router: Router) { }

  
  async ionViewWillEnter() {
    this.cargarUsuarios(); // Cargar productos al inicializar
  }
  async ngOnInit() {
    this.cargarUsuarios(); // Cargar productos al inicializar
  }

  
  editarUsuario(x: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        editarUsuario: x
      }
    };
    this.router.navigate(['/detalle-usuario'], navigationExtras);
  }

    // Función para obtener todos los productos
    cargarUsuarios() {
      this.serviceBD.seleccionarUsuarios().then((usuarios) => {
        // Si no hay foto, asignar la imagen predeterminada
        this.usuarios = usuarios.map(usuario => ({
          ...usuario,
          foto_usu: usuario.foto_usu ? usuario.foto_usu : '/assets/icon/perfil.jpg'
        }));
      }).catch((error) => {
        console.error('Error al cargar los usuarios:', error);
      });
    }

    async eliminarUsuario(usuario: any) {
      const alert = await this.alertController.create({
        header: 'Confirmar eliminación',
        message: `¿Estás seguro de que deseas eliminar a ${usuario.nombre_usu} ${usuario.apellido_usu}?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Eliminación cancelada');
            }
          },
          {
            text: 'Eliminar',
            handler: async () => {
              try {
                await this.serviceBD.eliminarUsuario(usuario.id_usu); // Llamar al servicio para eliminar
                this.cargarUsuarios(); // Actualizar la lista después de la eliminación
                const successAlert = await this.alertController.create({
                  header: 'Usuario eliminado',
                  message: `${usuario.nombre_usu} ha sido eliminado con éxito.`,
                  buttons: ['OK']
                });
                await successAlert.present();
              } catch (error) {
                console.error('Error al eliminar usuario:', error);
                const errorAlert = await this.alertController.create({
                  header: 'Error',
                  message: 'Ocurrió un error al intentar eliminar al usuario.',
                  buttons: ['OK']
                });
                await errorAlert.present();
              }
            }
          }
        ]
      });
    
      await alert.present();
    }

    
}
