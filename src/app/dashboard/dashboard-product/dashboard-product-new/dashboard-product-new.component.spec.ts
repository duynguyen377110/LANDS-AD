import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductNewComponent } from './dashboard-product-new.component';

describe('DashboardProductNewComponent', () => {
  let component: DashboardProductNewComponent;
  let fixture: ComponentFixture<DashboardProductNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardProductNewComponent]
    });
    fixture = TestBed.createComponent(DashboardProductNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
