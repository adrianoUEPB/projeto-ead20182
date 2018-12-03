import { Anexo } from './../../model/anexo.model';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Professor } from '../../model/professor.model';
import { Mural } from '../../model/mural.model';
import { MuralService } from '../../services/mural.service';
import { AnexoService } from '../../services/anexo.service';

@Component({
  selector: 'page-mural',
  templateUrl: 'mural.html',
})
export class MuralPage {

  professor: Professor;
  muralLista: Mural[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private muralService: MuralService,
    private anexoService: AnexoService,
    private alert: AlertController
    ) {
    this.professor = this.navParams.get('professor');
    this.muralLista = this.muralService.getMuralByProfessorId(this.professor.id);

  }

  countMural(id: number) {
    let count: number = 0;
    this.anexoService.getAnexoByMuralId(id).forEach(element => {
      count++;
    });

    return count;
  }

  openAnexos(mural: Mural) {
    
    let anexos: Anexo[] = this.anexoService.getAnexoByMuralId(mural.id_mural);
    let strAnexos: string = '';

    anexos.forEach(anexo => strAnexos += anexo.nome + " | ");

    let alert = this.alert.create({
      title: 'Anexos',
      message: strAnexos,
      buttons: ['Ok'],
    });
    alert.present();
  }

}
