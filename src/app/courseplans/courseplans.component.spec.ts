import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseplansComponent } from './courseplans.component';

describe('CourseplansComponent', () => {
  let component: CourseplansComponent;
  let fixture: ComponentFixture<CourseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseplansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
