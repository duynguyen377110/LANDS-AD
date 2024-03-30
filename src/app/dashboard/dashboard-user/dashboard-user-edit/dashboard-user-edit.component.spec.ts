import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserEditComponent } from './dashboard-user-edit.component';

describe('DashboardUserEditComponent', () => {
  let component: DashboardUserEditComponent;
  let fixture: ComponentFixture<DashboardUserEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUserEditComponent]
    });
    fixture = TestBed.createComponent(DashboardUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
