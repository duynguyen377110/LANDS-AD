import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTabsComponent } from './common-tabs.component';

describe('CommonTabsComponent', () => {
  let component: CommonTabsComponent;
  let fixture: ComponentFixture<CommonTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonTabsComponent]
    });
    fixture = TestBed.createComponent(CommonTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
