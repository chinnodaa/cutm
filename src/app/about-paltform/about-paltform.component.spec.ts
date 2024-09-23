import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPaltformComponent } from './about-paltform.component';

describe('AboutPaltformComponent', () => {
  let component: AboutPaltformComponent;
  let fixture: ComponentFixture<AboutPaltformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPaltformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPaltformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
