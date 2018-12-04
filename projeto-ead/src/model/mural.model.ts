import { Anexo } from "./anexo.model";

export interface Mural {
    id_mural: number;
    id_professor: number;
    descricao: string;
    data: string;
    anexo?: Anexo[];
}