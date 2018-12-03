import { Injectable } from "@angular/core";
import { Turma } from "../model/turma.model";
import { Professor } from "../model/professor.model";
import { MuralService } from "./mural.service";

@Injectable()
export class ProfessorService {

    pathImg: string = 'assets/imgs/';

    constructor(
        private muralService: MuralService
    ) {}

    professores: Professor[] = [
        {id: 1, nome: 'Obi-Wan', icone: this.pathImg+'obi-wan.jpg'},
        {id: 2, nome: 'Mestre Yoda', icone: this.pathImg+'mestre-yoda.jpg'},
        {id: 3, nome: 'Han Solo', icone: this.pathImg+'han-solo.jpg'},
        {id: 4, nome: 'Darth Vader', icone: this.pathImg+'darth-vader.jpg'}
    ]

    getProfessores(): Professor[] {
        return this.professores;
    }

    getProfessorById(id: number): Professor{
        
        let professor: Professor;

        for (let index = 0; index < this.professores.length; index++) {
            if(this.professores[index].id === id) {
                professor = this.professores[index];
                break;
            }
        }

        let dados: Professor = {
            id: professor.id,
            nome: professor.nome,
            icone: professor.icone,
            mural: this.muralService.getMuralByProfessorId(id)
        }

        return dados;
    }

}