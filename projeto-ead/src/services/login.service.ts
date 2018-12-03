import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario.model";

@Injectable()
export class LoginService {

    usuarios: Usuario[] = [
        {login: 'adriano', senha: 'adriano'},
        {login: 'estudante', senha: 'estudante'},
        {login: 'murilo', senha: 'murilo'},
        {login: 'thaina', senha: 'thaina'},
    ]

    verifyLoginAcess(usuario: Usuario) {

        for (let i = 0; i < this.usuarios.length; i++) {
            if(this.usuarios[i].login === usuario.login && this.usuarios[i].senha === usuario.senha) return true;
        }

        return false;
    }

}