import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComodenunciarPageComponent } from './comodenunciar-page.component';

describe('ComodenunciarPageComponent', () => {
  let component: ComodenunciarPageComponent;
  let fixture: ComponentFixture<ComodenunciarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComodenunciarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComodenunciarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
