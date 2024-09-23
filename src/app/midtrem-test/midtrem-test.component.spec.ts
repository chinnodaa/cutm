import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtremTestComponent } from './midtrem-test.component';

describe('MidtremTestComponent', () => {
  let component: MidtremTestComponent;
  let fixture: ComponentFixture<MidtremTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidtremTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidtremTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
