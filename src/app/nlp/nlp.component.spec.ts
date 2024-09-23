import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NLPComponent } from './nlp.component';

describe('NLPComponent', () => {
  let component: NLPComponent;
  let fixture: ComponentFixture<NLPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NLPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
