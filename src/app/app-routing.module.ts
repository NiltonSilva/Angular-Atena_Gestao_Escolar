import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/privado/home/home.component';
import { NovoAlunoComponent } from './pages/privado/alunos/novo-aluno/novo-aluno.component';
import { ListarAlunosComponent } from './pages/privado/alunos/listar-alunos/listar-alunos.component';
import { BibliotecaComponent } from './pages/privado/biblioteca/biblioteca.component';
import { Error404Component } from './pages/privado/shared/componentes/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'novoAluno',
    component: NovoAlunoComponent
  },
  {
    path: 'listarAlunos',
    component: ListarAlunosComponent
  },
  {
    path: 'biblioteca',
    component: BibliotecaComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
