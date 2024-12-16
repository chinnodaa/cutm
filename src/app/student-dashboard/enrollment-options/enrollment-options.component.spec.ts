import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentOptionsComponent } from './enrollment-options.component';

describe('EnrollmentOptionsComponent', () => {
  let component: EnrollmentOptionsComponent;
  let fixture: ComponentFixture<EnrollmentOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
