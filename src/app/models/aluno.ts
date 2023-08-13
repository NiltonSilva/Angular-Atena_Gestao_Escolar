export interface Aluno {
  matricula: number,
  nome: string,
  serie: string,
  dataNascimento: Date,
  rg?: string,
  cpf?: string,
  mae: string,
  telefoneMae: string,
  celularMae: string,
  pai?: string,
  telefonePai?: string,
  celularPai: string,
  foto?: any, /*  Depois verificar qual tipo colocar aqui na imagem */
  endereco: {
    cep: string,
    logradouro: string,
    numeroCasa: number,
    complemento?: string,
    bairro: string,
    cidade: string,
    estado: string,
  },
  responsavelFinanceiro: string,
  cpfRespFinanceiro: string,
  celularRespFinanceiro: string
}
