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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    NovoAlunoComponent,
    ListarAlunosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
