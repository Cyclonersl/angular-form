import { ServicoFormulario } from './servico-formulario-model';

export interface Servico {
  id: number;
  descricao: String;
  comMatricula: boolean;
  formulario: ServicoFormulario[];
}
