import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEventCreateComponent } from './event-create.component';

describe('TrainerEventCreateComponent', () => {
  let component: TrainerEventCreateComponent;
  let fixture: ComponentFixture<TrainerEventCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerEventCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
