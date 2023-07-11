import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthIndexComponent } from './auth-index.component';

describe('AuthIndexComponent', () => {
  let component: AuthIndexComponent;
  let fixture: ComponentFixture<AuthIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthIndexComponent]
    });
    fixture = TestBed.createComponent(AuthIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
