import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/privado/home/home.component';
import { NovoAlunoComponent } from './pages/privado/alunos/novo-aluno/novo-aluno.component';
import { ListarAlunosComponent } from './pages/privado/alunos/listar-alunos/listar-alunos.component';

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
    path: 'listarAluno',
    component: ListarAlunosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
