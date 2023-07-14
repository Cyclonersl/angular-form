import { Injectable } from '@angular/core';
import { Servico } from '../models/servico-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  constructor(private http: HttpClient) {}

  getServico(id: number) {
    const url = `http://localhost:3000/servicos/${id}`;
    return this.http.get<Servico>(url);
  }
}
