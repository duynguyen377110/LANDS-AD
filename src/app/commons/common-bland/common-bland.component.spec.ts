import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBlandComponent } from './common-bland.component';

describe('CommonBlandComponent', () => {
  let component: CommonBlandComponent;
  let fixture: ComponentFixture<CommonBlandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonBlandComponent]
    });
    fixture = TestBed.createComponent(CommonBlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
