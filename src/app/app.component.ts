import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuCtrl: MenuController, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.toggleMenuVisibility(event.url);
      }
    });
  }

  toggleMenuVisibility(url: string) {
    const hiddenRoutes = ['/login', '/signup', '/recuperar', '/codigo', '/nueva'];
    if (hiddenRoutes.includes(url)) {
      this.menuCtrl.enable(false);
    } else {
      this.menuCtrl.enable(true);
    }
  }
  irCategoria(id:number){
    let NavigationExtras: NavigationExtras = {
      state:{
        idCategoriaSeleccionada: id
      }
    }
    this.router.navigate(['/productos-por-categoria'],NavigationExtras)
  }
}
