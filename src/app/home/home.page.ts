import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


usuario: string;
clave: string;

  constructor(
    private toast: ToastController,
    private router: Router,
  ) {}

  limpiar(){
    console.log('limpia');
    this.usuario='';
    this.clave='';
  }

  ingresar(){
    console.log('ingresa');
    const nav: NavigationExtras={
      state:{usuario:this.usuario}
    };

  if (this.usuario === 'juanito' && this.clave === '123456'){
    this.mostrarAlerta('Acceso Correcto',3000);
    this.router.navigate(['/pagina1'],nav);
  }else{
    this.mostrarAlerta('Datos incorrectos',3000);
  }
  }
  async mostrarAlerta(mensaje: string,tiempo: number){
    const toast = await this.toast.create({
      message:mensaje,
      duration: tiempo
    });
    toast.present();
  }

}
