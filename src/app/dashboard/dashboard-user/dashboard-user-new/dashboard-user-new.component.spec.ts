import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserNewComponent } from './dashboard-user-new.component';

describe('DashboardUserNewComponent', () => {
  let component: DashboardUserNewComponent;
  let fixture: ComponentFixture<DashboardUserNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUserNewComponent]
    });
    fixture = TestBed.createComponent(DashboardUserNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
