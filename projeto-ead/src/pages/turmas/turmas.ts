import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs'
import { Turma } from '../../model/turma.model';
import { TurmaService } from '../../services/turma.service';
import { MuralPage } from '../mural/mural';
import { Professor } from '../../model/professor.model';

@Component({
  selector: 'page-turmas',
  templateUrl: 'turmas.html',
})
export class TurmasPage implements OnInit {

  turmas: Turma[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private turmaService: TurmaService
  ) { }

  ngOnInit() {
    this.turmas = this.turmaService.getTurmas();
  }

  openPage(professor: Professor) {
    this.navCtrl.push(MuralPage, {'professor': professor});
  }
}
