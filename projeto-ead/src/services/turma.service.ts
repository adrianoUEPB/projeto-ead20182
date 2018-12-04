import { Injectable } from "@angular/core";
import { Turma } from "../model/turma.model";
import { Professor } from "../model/professor.model";
import { ProfessorService } from "./professor.service";

@Injectable()
export class TurmaService {

    constructor(
        private professorService: ProfessorService
    ) {}

    pathImg: string = 'assets/imgs/';

    professores: Professor[] = this.professorService.getProfessores();

    turmas: Turma[] = [
        {disciplina: 'Introdução a Força', professor: this.professores[0]},
        {disciplina: 'Mestre Jedi', professor: this.professores[1]},
        {disciplina: 'Pilotagem I', professor: this.professores[2]},
        {disciplina: 'Lado Negro da Força', professor: this.professores[3]},
    ]

    getTurmas(): Turma[] {
        return this.turmas;
    }

}