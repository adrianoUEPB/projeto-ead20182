import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TurmasPage } from '../pages/turmas/turmas';
import { AgendaPage } from '../pages/agenda/agenda';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MuralPage } from '../pages/mural/mural';
import { AtividadesPage } from '../pages/atividades/atividades';
import { ForumPage } from '../pages/forum/forum';
import { PessoasPage } from '../pages/pessoas/pessoas';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginService } from '../services/login.service';

import { CalendarModule } from 'ionic3-calendar-neo-ptbr';
import { TurmaService } from '../services/turma.service';
import { ProfessorService } from '../services/professor.service';
import { AtividadeService } from '../services/atividade.service';
import { AnexoService } from '../services/anexo.service';
import { MuralService } from '../services/mural.service';

@NgModule({
  declarations: [
    MyApp,
    TurmasPage,
    AgendaPage,
    NotificacoesPage,
    TarefasPage,
    ConfiguracoesPage,
    LoginPage,
    MuralPage,
    AtividadesPage,
    ForumPage,
    PessoasPage,
    TabsPage
  ],
  imports: [
    CalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TurmasPage,
    AgendaPage,
    NotificacoesPage,
    TarefasPage,
    ConfiguracoesPage,
    LoginPage,
    MuralPage,
    AtividadesPage,
    ForumPage,
    PessoasPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TurmaService,
    ProfessorService,
    AtividadeService,
    AnexoService,
    MuralService,
    LoginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
