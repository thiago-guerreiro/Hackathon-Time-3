import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesPageComponent } from './informacoes-page.component';

describe('InformacoesPageComponent', () => {
  let component: InformacoesPageComponent;
  let fixture: ComponentFixture<InformacoesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
