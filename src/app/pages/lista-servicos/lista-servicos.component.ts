import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.css'],
})
export class ListaServicosComponent {
  categorias = [
    {
      descricao: 'Mais acessados',
      servicos: [
        {
          descricao: 'Segunda Via <br /> da Fatura',
          imagem: '/assets/icones/Icone_SegundaVia.png',
          link: '/servico/1',
        },
        {
          descricao: 'Parcelamento <br /> de Débito',
          imagem: '/assets/icones/Icone_Parcelamento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Mudança de<br />Titularidade',
          imagem: '/assets/icones/Icone_MudancaTitularidade.png',
          link: '/servico/1',
        },
        {
          descricao: 'Ligação de<br />Água e Ramal',
          imagem: '/assets/icones/Icone_Ligacao.png',
          link: '/servico/1',
        },
        {
          descricao: 'Comunicados<br />Abastecimento',
          imagem: '/assets/icones/Icone_Abastecimento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Vazamento<br />Oculto',
          imagem: '/assets/icones/Icone_Vazamento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Verificar<br />Solicitação',
          imagem: '/assets/icones/Icone_Verificar.png',
          link: '/servico/1',
        },
      ],
    },
    {
      descricao: 'Serviços de Fatura',
      servicos: [
        {
          descricao: 'Revisão de<br />Fatura',
          imagem: '/assets/icones/Icone_Restituicao.png',
          link: '/servico/1',
        },
        {
          descricao: 'Restituição<br/>de valores',
          imagem: '/assets/icones/Icone_Restituicao.png',
          link: '/servico/1',
        },
        {
          descricao: 'Verificar<br/>Débitos',
          imagem: '/assets/icones/Icone_VerificarDebito.png',
          link: '/servico/1',
        },
        {
          descricao: 'Quitação<br/>anual',
          imagem: '/assets/icones/Icone_CertidaoNegativa.png',
          link: '/servico/1',
        },
        {
          descricao: 'Certidão<br/>negativa',
          imagem: '/assets/icones/Icone_CertidaoNegativa.png',
          link: '/servico/1',
        },
        {
          descricao: 'Simulador<br/>de fatura',
          imagem: '/assets/icones/Icone_AlteracaoFatura.png',
          link: '/servico/1',
        },
      ],
    },
    {
      descricao: 'Serviços de Cadastro',
      servicos: [
        {
          descricao: 'Atualização<br />Cadastral',
          imagem: '/assets/icones/Icone_MudCadastro.png',
          link: '/servico/1',
        },
        {
          descricao: 'Tarifa Pública<br/>especial',
          imagem: '/assets/icones/Icone_Parcelamento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Tarifa<br/>Social',
          imagem: '/assets/icones/Icone_Parcelamento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Fatura por<br/>email',
          imagem: '/assets/icones/Icone_Email.png',
          link: '/servico/1',
        },
        {
          descricao: 'Alteração de<br/>Vencimento',
          imagem: '/assets/icones/Icone_Vencimento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Declaração<br/>de ligação',
          imagem: '/assets/icones/Icone_CertidaoNegativa.png',
          link: '/servico/1',
        },
      ],
    },
    {
      descricao: 'Serviço na Unidade',
      servicos: [
        {
          descricao: 'Falta de Água<br />casa/rua',
          imagem: '/assets/icones/Icone_Agua.png',
          link: '/servico/1',
        },
        {
          descricao: 'Vazamento de<br />água/esgoto',
          imagem: '/assets/icones/Icone_Agua.png',
          link: '/servico/1',
        },
        {
          descricao: 'Religação<br/>de cavalete',
          imagem: '/assets/icones/Icone_Agua.png',
          link: '/servico/1',
        },
        {
          descricao: 'Deslocamento<br/>de cavalete',
          imagem: '/assets/icones/Icone_Vazamento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Deslocamento<br/>de ramal',
          imagem: '/assets/icones/Icone_Vazamento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Caixa Inspeção<br/>de esgoto',
          imagem: '/assets/icones/Icone_Vazamento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Substituição<br/>de hidrômetro',
          imagem: '/assets/icones/Icone_Vazamento.png',
          link: '/servico/1',
        },
        {
          descricao: 'Histórico<br/>de Volume',
          imagem: '/assets/icones/Icone_Agua.png',
          link: '/servico/1',
        },
        {
          descricao: 'Consumo<br/>diario',
          imagem: '/assets/icones/Icone_Agua.png',
          link: '/servico/1',
        },
        {
          descricao: 'Supressão/fusão<br/>da ligação',
          imagem: '/assets/icones/Icone_ContaFinal.png',
          link: '/servico/1',
        },
        {
          descricao: 'Defesa de<br/>Infração',
          imagem: '/assets/icones/Icone_ContaFinal.png',
          link: '/servico/1',
        },
        {
          descricao: 'Defesa de<br/>Infração',
          imagem: '/assets/icones/Icone_ContaFinal.png',
          link: '/servico/1',
        },
        {
          descricao: 'Outros<br/>Serviços',
          imagem: '/assets/icones/Icone_MaisServicos.png',
          link: '/servico/1',
        },
      ],
    },
    {
      descricao: 'Outros Serviços',
      servicos: [
        {
          descricao: 'Ligação<br />Temporária',
          imagem: '/assets/icones/Icone_Agua.png',
          link: '/servico/1',
        },
        {
          descricao: 'Consulta de<br/>Viabilidade agua',
          imagem: '/assets/icones/Icone_Projeto.png',
          link: '/servico/1',
        },
        {
          descricao: 'Consulta de<br/>Viabilidade esgoto',
          imagem: '/assets/icones/Icone_Projeto.png',
          link: '/servico/1',
        },
        {
          descricao: 'Projeto<br/>Hidrosanitário',
          imagem: '/assets/icones/Icone_Projeto.png',
          link: '/servico/1',
        },
        {
          descricao: 'Ampliação<br/>de Rede (PAR)',
          imagem: '/assets/icones/Icone_Projeto.png',
          link: '/servico/1',
        },
        {
          descricao: 'Agendar<br/>Atendimento',
          imagem: '/assets/icones/Icone_Agendamento.png',
          link: '/servico/1',
        },
      ],
    },
  ];
}
