import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTestComponent } from './final-test.component';

describe('FinalTestComponent', () => {
  let component: FinalTestComponent;
  let fixture: ComponentFixture<FinalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
