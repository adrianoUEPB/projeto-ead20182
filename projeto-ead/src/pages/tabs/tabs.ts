import { Component } from '@angular/core';

import { AtividadesPage } from '../atividades/atividades';
import { ForumPage } from '../forum/forum';
import { PessoasPage } from '../pessoas/pessoas';
import { TurmasPage } from '../turmas/turmas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  turmaRoot = TurmasPage;
  atividadesRoot = AtividadesPage;
  forumRoot = ForumPage;
  pessoasRoot = PessoasPage;

  constructor() {}

}
