import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRecruitersComponent } from './top-recruiters.component';

describe('TopRecruitersComponent', () => {
  let component: TopRecruitersComponent;
  let fixture: ComponentFixture<TopRecruitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRecruitersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
