import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunosService } from 'src/app/core/services/alunos/alunos.service';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent implements OnInit {

  formulario!: FormGroup;
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AlunosService
  ) { }

  ngOnInit(): void {
    this.gerarNumeroMatricula();

    this.formulario = this.formBuilder.group({
      numeroMatricula: [`${this.numMatricula}`, Validators.required],
      nomeAluno: ['', Validators.required],
      // serie: [``, [Validators.required]],
      serie: [''],
      dataNascimento: ['', [Validators.required]],
      numeroRg: [''],
      numeroCpf: [''],
      nomeMae: ['', Validators.required],
      telefoneMae: ['', Validators.required],
      celularMae: ['', Validators.required],
      nomePai: [''],
      telefonePai: [''],
      celularPai: [''],
      endereco: this.formBuilder.group({
        cep: ['', Validators.compose([Validators.required, Validators.maxLength(9)])],
        logradouro: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
        numeroCasa: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['Ceará', Validators.required],
      }),
      responsavelFinanceiro: ['', Validators.required],
      cpfRespFinanceiro: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      celularRespFinanceiro: ['', Validators.required]
    });
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

    this.adicionarUnidadeNumeroMatricula();
  }

  adicionarUnidadeNumeroMatricula(): number {
    return this.numAleat++;
  }

  criarAluno(): void {
    console.log(this.formulario);
    this.service.criar(this.formulario.value).subscribe();
  }

}
