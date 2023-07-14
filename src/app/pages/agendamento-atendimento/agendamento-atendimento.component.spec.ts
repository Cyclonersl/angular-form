import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoAtendimentoComponent } from './agendamento-atendimento.component';

describe('AgendamentoAtendimentoComponent', () => {
  let component: AgendamentoAtendimentoComponent;
  let fixture: ComponentFixture<AgendamentoAtendimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentoAtendimentoComponent]
    });
    fixture = TestBed.createComponent(AgendamentoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
