import { Component } from '@angular/core';

import { MuralPage } from '../mural/mural';
import { AtividadesPage } from '../atividades/atividades';
import { ForumPage } from '../forum/forum';
import { PessoasPage } from '../pessoas/pessoas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  muralRoot = MuralPage;
  atividadesRoot = AtividadesPage;
  forumRoot = ForumPage;
  pessoasRoot = PessoasPage;

  constructor() {}

}
