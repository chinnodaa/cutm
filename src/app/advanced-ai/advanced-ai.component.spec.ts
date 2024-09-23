import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedAiComponent } from './advanced-ai.component';

describe('AdvancedAiComponent', () => {
  let component: AdvancedAiComponent;
  let fixture: ComponentFixture<AdvancedAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
