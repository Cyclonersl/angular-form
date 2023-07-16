import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.css'],
})
export class ListaServicosComponent {
  categorias = [
    {
      descricao: 'Serviços Mais acessados',
      servicos: [
        {
          descricao: 'Segunda Via',
          imagem: '/assets/Icone_SegundaVia.png',
          link: '/servico/1',
        },
        {
          descricao: 'Segunda Via 2',
          imagem: '/assets/Icone_SegundaVia.png',
          link: '/servico/1',
        },
      ],
    },
    {
      descricao: 'Serviços de Fatura',
      servicos: [
        {
          descricao: 'Segunda Via',
          imagem: '/assets/Icone_SegundaVia.png',
          link: '/servico/1',
        },
        {
          descricao: 'Outro serviço',
          imagem: '/assets/Icone_SegundaVia.png',
          link: '/servico/1',
        },
      ],
    },
  ];
}
