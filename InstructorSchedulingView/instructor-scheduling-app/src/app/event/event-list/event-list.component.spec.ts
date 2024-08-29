import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEventListComponent } from './event-list.component';

describe('TrainerEventListComponent', () => {
  let component: TrainerEventListComponent;
  let fixture: ComponentFixture<TrainerEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerEventListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
