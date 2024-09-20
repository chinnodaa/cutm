import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechologyComponent } from './techology.component';

describe('TechologyComponent', () => {
  let component: TechologyComponent;
  let fixture: ComponentFixture<TechologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
