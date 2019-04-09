import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../api/users/api.service';
import { UserModel } from '../api/users/user-model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  user: UserModel;

  constructor(private route: ActivatedRoute, private loadController: LoadingController, private api: ApiService) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('id');
    this.getUser(username);
  }

  async getUser(username) {
    const loading = await this.loadController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getUser(username)
      .subscribe(res => {
        this.user = res;
        loading.dismiss();
      }, err => {
        loading.dismiss();
      });
  }

  dateFormatted(date: string): string {
    const objDate = new Date(date);

    const data =  objDate.getDate().toString().padStart(2, '0') + '/' +
                  (objDate.getMonth() + 1).toString().padStart(2, '0') + '/' + 
                  objDate.getFullYear();

    const hora =  objDate.getHours().toString().padStart(2, '0') + ':' +
                  objDate.getMinutes().toString().padStart(2, '0') + ':' +
                  objDate.getSeconds().toString().padStart(2, '0');
    return data + ' ' + hora;
  }

}
