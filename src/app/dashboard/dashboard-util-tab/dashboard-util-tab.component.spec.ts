import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUtilTabComponent } from './dashboard-util-tab.component';

describe('DashboardUtilTabComponent', () => {
  let component: DashboardUtilTabComponent;
  let fixture: ComponentFixture<DashboardUtilTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUtilTabComponent]
    });
    fixture = TestBed.createComponent(DashboardUtilTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
