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
import { BotaoVoltarComponent } from './pages/privado/shared/componentes/botao-voltar/botao-voltar.component';
import { BotaoSalvarComponent } from './pages/privado/shared/componentes/botao-salvar/botao-salvar.component';
import { BibliotecaComponent } from './pages/privado/biblioteca/biblioteca.component';
import { Error404Component } from './pages/privado/shared/componentes/error404/error404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';
import { AlunoComponent } from './pages/privado/alunos/aluno/aluno.component';
import { BotaoRetrairMenuComponent } from './pages/privado/shared/componentes/botao-retrair-menu/botao-retrair-menu.component';

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
    Error404Component,
    AlunoComponent,
    BotaoRetrairMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
