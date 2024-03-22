import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsInputComponent } from './commons-input.component';

describe('CommonsInputComponent', () => {
  let component: CommonsInputComponent;
  let fixture: ComponentFixture<CommonsInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonsInputComponent]
    });
    fixture = TestBed.createComponent(CommonsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
