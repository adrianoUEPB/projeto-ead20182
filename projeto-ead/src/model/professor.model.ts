import { Atividade } from "./atividade.model";
import { Mural } from "./mural.model";

export interface Professor {
   id: number;
   nome: string;
   icone: string;
   mural?: Mural[];
   atividade?: Atividade[];
}