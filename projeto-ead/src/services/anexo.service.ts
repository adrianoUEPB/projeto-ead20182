import { Injectable } from "@angular/core";
import { Anexo } from "../model/anexo.model";

@Injectable()
export class AnexoService {

    anexos: Anexo[] = [
        {id: 1, id_professor: 2, id_mural: 1, nome: 'atividade-ioda-1.pdf'},
        {id: 2, id_professor: 4, id_mural:2, nome: 'atividade-dath-vader-1.pdf'},
        {id: 3, id_professor: 3,id_mural: 3, nome: 'atividade-han-solo-1.pdf'},
        {id: 4, id_professor: 1, id_mural: 4, nome: 'atividade-obi-wan-1.pdf'},
        {id: 5, id_professor: 2, id_mural: 1, nome: 'atividade-ioda-2.pdf'},
        {id: 6, id_professor: 4, id_mural: 6, nome: 'atividade-dath-vader-2.pdf'},
        {id: 7, id_professor: 3, id_mural:11, nome: 'atividade-han-solo-2.pdf'},
        {id: 8, id_professor: 1, id_mural: 12, nome: 'atividade-obi-wan-2.pdf'},
        {id: 9, id_professor: 2, id_mural: 5, nome: 'atividade-ioda-3.pdf'},
        {id: 10,id_professor: 4, id_mural: 6, nome: 'atividade-dath-vader-3.pdf'},
        {id: 11,id_professor: 3, id_mural:11, nome: 'atividade-han-solo-3.pdf'},
        {id: 12,id_professor: 1, id_mural: 4, nome: 'atividade-obi-wan-3.pdf'},
        {id: 13,id_professor: 2, id_mural:1, nome: 'atividade-ioda-4.pdf'},
        {id: 14,id_professor: 4, id_mural:6, nome: 'atividade-dath-vader-4.pdf'},
        {id: 15,id_professor: 3, id_mural: 3, nome: 'atividade-han-solo-4.pdf'},
        {id: 16,id_professor: 1, id_mural: 12, nome: 'atividade-obi-wan-4.pdf'},
        {id: 17,id_professor: 2, id_mural: 9,  nome: 'atividade-ioda-5.pdf'},
        {id: 18,id_professor: 4, id_mural:6,  nome: 'atividade-dath-vader-5.pdf'},
        {id: 19,id_professor: 3, id_mural: 3, nome: 'atividade-han-solo-5.pdf'},
        {id: 20,id_professor: 1, id_mural: 4, nome: 'atividade-obi-wan-5.pdf'},
        {id: 21,id_professor: 2, id_mural:1, nome: 'atividade-ioda-6.pdf'},
        {id: 22,id_professor: 4, id_mural:2, nome: 'atividade-dath-vader-6.pdf'},
        {id: 23,id_professor: 3, id_mural:11, nome: 'atividade-han-solo-6.pdf'},
        {id: 24,id_professor: 1, id_mural: 4, nome: 'atividade-obi-wan-6.pdf'},
        {id: 25,id_professor: 2, id_mural:9,  nome: 'atividade-ioda-7.pdf'},
        {id: 26,id_professor: 4, id_mural: 6, nome: 'atividade-dath-vader-7.pdf'},
        {id: 27,id_professor: 3, id_mural: 11, nome: 'atividade-han-solo-7.pdf'},
        {id: 28,id_professor: 1, id_mural: 12, nome: 'atividade-obi-wan-7.pdf'},
        {id: 29,id_professor: 2, id_mural:5, nome: 'atividade-ioda-8.pdf'},
        {id: 30,id_professor: 4, id_mural: 2, nome: 'atividade-dath-vader-8.pdf'},
        {id: 31,id_professor: 3, id_mural: 3, nome: 'atividade-han-solo-8.pdf'},
        {id: 32,id_professor: 1, id_mural: 4, nome: 'atividade-obi-wan-8.pdf'},
    ]

    getAnexos(): Anexo[] {
        return this.anexos;
    }

    getAnexoById(id: number) {
        return this.getAnexos().filter(item => item.id === id);
    }

    getAnexoByProfessorId(id: number) {
        return this.getAnexos().filter(item => item.id_professor === id);
    }

    getAnexoByMuralId(id: number): Anexo[] {
        return this.getAnexos().filter(item => item.id_mural === id);
    }
}