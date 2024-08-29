import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEventDetailComponent } from './event-detail.component';

describe('TrainerEventDetailComponent', () => {
  let component: TrainerEventDetailComponent;
  let fixture: ComponentFixture<TrainerEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerEventDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
