import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRoleNewComponent } from './dashboard-role-new.component';

describe('DashboardRoleNewComponent', () => {
  let component: DashboardRoleNewComponent;
  let fixture: ComponentFixture<DashboardRoleNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRoleNewComponent]
    });
    fixture = TestBed.createComponent(DashboardRoleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
