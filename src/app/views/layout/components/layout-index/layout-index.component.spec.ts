import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutIndexComponent } from './layout-index.component';

describe('LayoutIndexComponent', () => {
  let component: LayoutIndexComponent;
  let fixture: ComponentFixture<LayoutIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutIndexComponent]
    });
    fixture = TestBed.createComponent(LayoutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
