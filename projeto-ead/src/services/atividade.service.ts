import { Injectable } from "@angular/core";
import { Turma } from "../model/turma.model";
import { Professor } from "../model/professor.model";
import { Atividade } from "../model/atividade.model";

@Injectable()
export class AtividadeService {

    // pathImg: string = 'assets/imgs/';

    // atividades: Atividade[] = [
    //     {id: 1, nome: 'Obi-Wan', icone: this.pathImg+'obi-wan.jpg', id_anexo: [1,5,9,13,17,21,25,29]},
    //     {id: 2, nome: 'Mestre Yoda', icone: this.pathImg+'mestre-yoda.jpg', id_anexo: [2,6,10,14,18,22,26,30]},
    //     {id: 3, nome: 'Han Solo', icone: this.pathImg+'han-solo.jpg', id_anexo: [3,7,11,15,19,23,27,31]},
    //     {id: 4, nome: 'Darth Vader', icone: this.pathImg+'darth-vader.jpg', id_anexo: [4,8,12,16,20,24,28,32]},
    // ]

    // getProfessores(): Professor[] {
    //     return this.professores;
    // }

    // getProfessorById(id: number) {
    //     return this.getProfessores().filter(item => item.id === id);
    // }

}