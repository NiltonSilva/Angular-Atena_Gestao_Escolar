import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent implements OnInit {

  numAno: number = 0;
  numMes: number = 0;
  numDia: number = 0;
  numAleat: number = 1;
  numMatricula: string = '';
  data: any;
  dataMatricula = new Date();
  dataFormatada = ((this.dataMatricula.getDate()
    + "/")
    + ((this.dataMatricula.getMonth() + 1)
      + "/")
    + this.dataMatricula.getFullYear());



  constructor() { }

  ngOnInit(): void {
    this.gerarNumeroMatricula()
    let dataMatricula = new Date();
  }

  gerarNumeroMatricula() {
    this.data = new Date();
    this.numAno = this.data.getFullYear().toString().substr(-2);
    this.numMes = this.data.getMonth() + 1;
    this.numDia = this.data.getDate();

    this.numMatricula = this.numAno.toString()
      + this.numMes.toString().padStart(2, '0')
      + this.numDia.toString().padStart(2, '0')
      + this.numAleat.toString().padStart(2, '0')

    console.log(this.numMatricula)

    this.adicionarUnidadeNumeroMatricula();
  }

  adicionarUnidadeNumeroMatricula(): number {
    return this.numAleat++;
  }

}
