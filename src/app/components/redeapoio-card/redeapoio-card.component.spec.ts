import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeapoioCardComponent } from './redeapoio-card.component';

describe('RedeapoioCardComponent', () => {
  let component: RedeapoioCardComponent;
  let fixture: ComponentFixture<RedeapoioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeapoioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeapoioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
