import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioServicoComponent } from './pages/formulario-servico/formulario-servico.component';
import { ListaServicosComponent } from './pages/lista-servicos/lista-servicos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ListaServicosComponent },
  { path: 'servico/:id', component: FormularioServicoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
