import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Producto } from 'src/app/services/producto';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-crudteclados',
  templateUrl: './crudteclados.page.html',
  styleUrls: ['./crudteclados.page.scss'],
})
export class CrudtecladosPage implements OnInit {

  teclados: Producto[] = []; // Arreglo para almacenar los teclados
  tecladosFiltrados: Producto[] = []; // Arreglo para almacenar los teclados filtrados

  constructor(private alertController: AlertController, private serviceBD: ServiceBDService) { }

  ngOnInit() {
    // Inicializa el arreglo filtrado
    this.tecladosFiltrados = this.teclados; 
  }

  ionViewWillEnter() {
    // Este método se ejecuta cada vez que la vista va a entrar
    this.serviceBD.dbState().subscribe(data => {
      if (data) {
        // Llama al método fetch para asegurarte de que se ha conectado correctamente a la base de datos
        this.serviceBD.fetchlistadoTeclados().subscribe(() => {
          // Llama a seleccionarTeclados() y usa 'then' para manejar la promesa
          this.serviceBD.seleccionarTeclados().then(teclados => {
            // Asigna los teclados obtenidos al arreglo 'teclados'
            this.teclados = teclados;

            // Actualiza tecladosFiltrados para mostrar los teclados obtenidos
            this.tecladosFiltrados = teclados;
          });
        });
      }
    });
  }
}
