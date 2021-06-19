import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeapoioPageComponent } from './redeapoio-page.component';

describe('RedeapoioPageComponent', () => {
  let component: RedeapoioPageComponent;
  let fixture: ComponentFixture<RedeapoioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeapoioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeapoioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
