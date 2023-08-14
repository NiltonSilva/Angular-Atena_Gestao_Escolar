import { Component, Input } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {

  @Input()
  aluno: Aluno = {
    matricula: 23081400,
    nome: "Nilton Silva",
    serie: "sexto_fundamental",
    // dataNascimento: "",
    rg: "1234567890",
    cpf: "01002003000",
    mae: "Maria Antonieta de las Neves",
    telefoneMae: "8532361154",
    celularMae: "85997730802",
    pai: "Dom Ramon Valdez",
    telefonePai: "8532361154",
    celularPai: "85994076000",
    foto: "",
    endereco: {
      cep: "60311310",
      logradouro: "Rua Santa Inês",
      numeroCasa: 112,
      complemento: "Casa A",
      bairro: "Pirambu",
      cidade: "Fortaleza",
      estado: "Ceará",
    },
    responsavelFinanceiro: "Florinda Meza",
    cpfRespFinanceiro: "333444555-6",
    celularRespFinanceiro: "85988776655"

  }

}


