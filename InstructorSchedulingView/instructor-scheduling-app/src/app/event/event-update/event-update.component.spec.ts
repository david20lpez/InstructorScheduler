import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEventUpdateComponent } from './event-update.component';

describe('TrainerEventUpdateComponent', () => {
  let component: TrainerEventUpdateComponent;
  let fixture: ComponentFixture<TrainerEventUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerEventUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerEventUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
