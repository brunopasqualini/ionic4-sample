import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-screen',
  templateUrl: './new-screen.page.html',
  styleUrls: ['./new-screen.page.scss'],
})
export class NewScreenPage implements OnInit {

  public valor: number;

  constructor(public toast: ToastController) { }

  ngOnInit() {
  }

  async multiplica(n1: number, n2: number){
    this.valor = (n1 * n2);
    const toaster = await this.toast.create({
      message: 'Result ' + this.valor,
      duration: 3000
    });
    toaster.present();
  }

  teste(event){
    let valor = event.target.value;
  }

}
