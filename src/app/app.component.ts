import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  idRol: number | null = null;
  usuarioConectado: any[] = [];

  constructor(
    private serviceBD: ServiceBDService,
    private menuCtrl: MenuController,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.handleRouteChange(event.url);
      }
    });
  }

  async ngOnInit() {
    await this.obtenerRolUsuarioConectado();
  }

  async obtenerRolUsuarioConectado() {
    const usuarios = await this.serviceBD.consultarUsuariosPorEstadoConectado();
    if (usuarios.length > 0) {
      this.idRol = usuarios[0].id_rol;
    } else {
      this.idRol = null; // No hay usuario conectado
    }
  }

  // Método para manejar cambios de ruta
  async handleRouteChange(url: string) {
    const loginRoutes = ['/login', '/signup', '/recuperar', '/codigo', '/nueva'];
    if (loginRoutes.includes(url)) {
      this.idRol = null; // Establecer idRol en null en páginas de login
      this.usuarioConectado = []; // Limpiar el usuario conectado
      this.menuCtrl.enable(false); // Deshabilitar el menú
    } else {
      this.menuCtrl.enable(true); // Habilitar el menú
      await this.obtenerRolUsuarioConectado(); // Buscar usuario conectado en otras páginas
    }
  }

  irCategoria(id: number) {
    let navigationExtras: NavigationExtras = {
      state: {
        idCategoriaSeleccionada: id,
      },
    };
    this.router.navigate(['/productos-por-categoria'], navigationExtras);
  }
}
