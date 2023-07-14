import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Servico } from 'src/app/models/servico-model';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-formulario-servico',
  templateUrl: './formulario-servico.component.html',
  styleUrls: ['./formulario-servico.component.css'],
})
export class FormularioServicoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private servicoService: ServicoService
  ) {}

  servico: Servico | undefined;
  servicoForm!: FormGroup;

  ngOnInit(): void {
    this.getServico();
  }

  getServico(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.servicoService.getServico(id).subscribe((servico) => {
      this.servico = servico;

      const grupo: any = {};
      this.servico.formulario.forEach((campo) => {
        grupo[`campo_${campo.id}`] = new FormControl(
          campo.valores || '',
          Validators.required
        );
      });
      this.servicoForm = new FormGroup(grupo);
    });
  }

  onSubmit() {
    console.log(this.servicoForm);
  }
}
