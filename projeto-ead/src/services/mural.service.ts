import { Injectable } from "@angular/core";
import { Anexo } from "../model/anexo.model";
import { Mural } from "../model/mural.model";

@Injectable()
export class MuralService {

    mural: Mural[] = [
        {id_mural: 1, data: '12 de out', id_professor: 2, descricao: 'Faça ou não faça. Não existe tentativa.'},
        {id_mural: 2, data: '13 de out', id_professor: 4, descricao: 'Eu acho a sua falta de fé perturbadora.'},
        {id_mural: 3, data: '14 de out', id_professor: 3, descricao: 'Viajar pelo hiperespaço não é igual passear pelo parquinho não, garoto.'},
        {id_mural: 4, data: '10 de nov', id_professor: 1, descricao: 'Você faz aquilo que você acha que tem fazer.'},
        {id_mural: 5, data: '13 de nov', id_professor: 2, descricao: 'Grande guerreiro? Guerra não faz grande ninguém.'},
        {id_mural: 6, data: '27 de nov', id_professor: 4, descricao: 'Você está controlando seu medo... agora libere a sua raiva. Só o seu ódio poderá destruir-me.'},
        {id_mural: 9, data: '14 de nov', id_professor: 2, descricao: 'O lado negro não é mais poderoso, apenas mais rápido, mais fácil e mais sedutor.'},
        {id_mural: 11, data: '01 de dez',id_professor: 3, descricao: 'Não é assim que a Força funciona!'},
        {id_mural: 12, data: '02 de dez',id_professor: 1, descricao: 'Esteja consciente de seus pensamentos. Eles traem você.'},
    ]

    getMural(): Mural[] {
        return this.mural;
    }

    getMuralById(id: number) {
        return this.getMural().filter(item => item.id_mural === id);
    }

    getMuralByProfessorId(id: number): Mural[] {
        return this.getMural().filter(item => item.id_professor === id);
    }
}