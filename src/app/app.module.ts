import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioServicoComponent } from './pages/formulario-servico/formulario-servico.component';
import { ListaServicosComponent } from './pages/lista-servicos/lista-servicos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AgendamentoAtendimentoComponent } from './pages/agendamento-atendimento/agendamento-atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioServicoComponent,
    ListaServicosComponent,
    PageNotFoundComponent,
    AgendamentoAtendimentoComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
