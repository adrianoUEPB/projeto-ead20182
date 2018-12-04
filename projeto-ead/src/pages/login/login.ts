import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Usuario } from '../../model/usuario.model';
import { LoginService } from '../../services/login.service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  usuario: string;
  senha: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginService,
    private alert: AlertController
  ) { }

  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openPage() {

    let user: Usuario = {
      login: this.usuario,
      senha: this.senha
    }

    if(this.usuario === '') {
      let alert = this.alert.create({
        title: 'Erro de login',
        subTitle: 'Preencha o nome do usuário',
        buttons: ['Ok']
      });
      alert.present();
    } else if(this.senha === '') {
      let alert = this.alert.create({
        title: 'Erro de login',
        subTitle: 'Preencha a senha do usuário',
        buttons: ['Ok']
      });
      alert.present();
    } else if(this.loginService.verifyLoginAcess(user)) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      let alert = this.alert.create({
        title: 'Erro de login',
        subTitle: 'Usuário ou senha incorretos',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
