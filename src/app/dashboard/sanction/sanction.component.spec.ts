import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionComponent } from './sanction.component';

describe('SanctionComponent', () => {
  let component: SanctionComponent;
  let fixture: ComponentFixture<SanctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanctionComponent]
    });
    fixture = TestBed.createComponent(SanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
