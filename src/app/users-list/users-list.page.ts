import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/users/api.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../api/users/user-model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  users: UserModel[] = [];

  constructor(public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getUsers()
      .subscribe(res => {
        this.users = res;
        loading.dismiss();
      }, err => {
        loading.dismiss();
      });
  }

  openUserDetail(user: UserModel) {
    this.navCtrl.navigateForward('user-detail/' + user.login);
  }
}
