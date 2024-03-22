import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoryNewComponent } from './dashboard-category-new.component';

describe('DashboardCategoryNewComponent', () => {
  let component: DashboardCategoryNewComponent;
  let fixture: ComponentFixture<DashboardCategoryNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCategoryNewComponent]
    });
    fixture = TestBed.createComponent(DashboardCategoryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
