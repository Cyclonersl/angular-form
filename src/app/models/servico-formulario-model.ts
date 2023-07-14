import { ServicoFormularioCampo } from './servico-formulario-campo-model';

export interface ServicoFormulario {
  id: number;
  label: string;
  valores: ServicoFormularioCampo[];
}
