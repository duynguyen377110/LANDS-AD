import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRoleEditComponent } from './dashboard-role-edit.component';

describe('DashboardRoleEditComponent', () => {
  let component: DashboardRoleEditComponent;
  let fixture: ComponentFixture<DashboardRoleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRoleEditComponent]
    });
    fixture = TestBed.createComponent(DashboardRoleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
