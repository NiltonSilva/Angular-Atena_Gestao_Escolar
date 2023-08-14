import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/core/services/alunos/alunos.service';
import { Aluno } from 'src/app/models/aluno';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})
export class ListarAlunosComponent implements OnInit {

  listaAlunos: Aluno[] = [];

  constructor(private service: AlunosService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaAlunos) => {
      this.listaAlunos = listaAlunos
    });
  }

}
