import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.page.html',
  styleUrls: ['./detalle-usuario.page.scss'],
})
export class DetalleUsuarioPage implements OnInit {
  usuarioSolo: any = {};

  constructor(
    private toastController: ToastController,
    private bd: ServiceBDService,
    private storage: NativeStorage,
    private router: Router,
    private activedroute: ActivatedRoute,
    private alertasService: AlertasService
  ) {
    this.activedroute.queryParams.subscribe((res) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuarioSolo = this.router.getCurrentNavigation()?.extras?.state?.['editarUsuario'];
      }
    });
  }

  ngOnInit() {}

  
}
