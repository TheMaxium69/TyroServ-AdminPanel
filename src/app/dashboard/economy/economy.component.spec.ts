import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyComponent } from './economy.component';

describe('EconomyComponent', () => {
  let component: EconomyComponent;
  let fixture: ComponentFixture<EconomyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EconomyComponent]
    });
    fixture = TestBed.createComponent(EconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
