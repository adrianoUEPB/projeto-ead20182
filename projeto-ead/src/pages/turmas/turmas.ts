import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-turmas',
  templateUrl: 'turmas.html',
})
export class TurmasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  openPage() {
    this.navCtrl.push(TabsPage);
  }
}
