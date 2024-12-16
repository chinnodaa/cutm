import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesAnalyticsComponent } from './grades-analytics.component';

describe('GradesAnalyticsComponent', () => {
  let component: GradesAnalyticsComponent;
  let fixture: ComponentFixture<GradesAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
