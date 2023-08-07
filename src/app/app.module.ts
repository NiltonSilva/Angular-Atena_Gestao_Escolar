import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/privado/home/home.component';
import { RodapeComponent } from './pages/privado/rodape/rodape.component';
import { CabecalhoComponent } from './pages/privado/cabecalho/cabecalho.component';
import { NovoAlunoComponent } from './pages/privado/alunos/novo-aluno/novo-aluno.component';
import { ListarAlunosComponent } from './pages/privado/alunos/listar-alunos/listar-alunos.component';
import { MenuComponent } from './pages/privado/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotaoVoltarComponent } from './pages/shared/componentes/botao-voltar/botao-voltar.component';
import { BotaoSalvarComponent } from './pages/shared/componentes/botao-salvar/botao-salvar.component';
import { BibliotecaComponent } from './pages/privado/biblioteca/biblioteca.component';
import { Error404Component } from './pages/privado/shared/componentes/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    NovoAlunoComponent,
    ListarAlunosComponent,
    MenuComponent,
    BotaoVoltarComponent,
    BotaoSalvarComponent,
    BibliotecaComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
