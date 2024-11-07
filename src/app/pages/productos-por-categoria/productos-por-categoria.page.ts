import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/services/producto';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-productos-por-categoria',
  templateUrl: './productos-por-categoria.page.html',
  styleUrls: ['./productos-por-categoria.page.scss'],
})
export class ProductosPorCategoriaPage implements OnInit {

  productos: Producto[] = [];
  id! : number
  

  constructor(private bd: ServiceBDService, private router : Router, private activated : ActivatedRoute) {

    this.activated.queryParams.subscribe(res=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.id = this.router.getCurrentNavigation()?.extras.state?.['productoEnviado']
      }
    })
  }

  ngOnInit() {
    this.bd.seleccionarProductosPorCategoria(this.id)
    this.bd.fetchProductoPorCategoria().subscribe(data => {
      this.productos = data;
    });
  }


  irDetalleProducto(producto : any){
    let navagation : NavigationExtras={
      state:{
        productoEnviado : producto
      }
    }
    this.router.navigate(['/detalle-producto'],navagation)
  }

}
