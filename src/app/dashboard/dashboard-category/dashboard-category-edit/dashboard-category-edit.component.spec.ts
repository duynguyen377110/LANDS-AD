import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoryEditComponent } from './dashboard-category-edit.component';

describe('DashboardCategoryEditComponent', () => {
  let component: DashboardCategoryEditComponent;
  let fixture: ComponentFixture<DashboardCategoryEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCategoryEditComponent]
    });
    fixture = TestBed.createComponent(DashboardCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
