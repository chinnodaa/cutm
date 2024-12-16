import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsDeadlinesComponent } from './assignments-deadlines.component';

describe('AssignmentsDeadlinesComponent', () => {
  let component: AssignmentsDeadlinesComponent;
  let fixture: ComponentFixture<AssignmentsDeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentsDeadlinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentsDeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
