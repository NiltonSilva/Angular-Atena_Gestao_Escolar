import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from 'src/app/models/aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private readonly urlAPI = "http://localhost:3000/alunos";

  constructor(
    private http: HttpClient
  ) { }

  criar(aluno: Aluno): Observable<Aluno> {
    console.log(aluno);
    return this.http.post<Aluno>(this.urlAPI, aluno);
  }

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.urlAPI);
  }

}
