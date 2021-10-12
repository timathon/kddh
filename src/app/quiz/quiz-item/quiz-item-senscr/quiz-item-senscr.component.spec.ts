import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizItemSenscrComponent } from './quiz-item-senscr.component';

describe('QuizItemSenscrComponent', () => {
  let component: QuizItemSenscrComponent;
  let fixture: ComponentFixture<QuizItemSenscrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizItemSenscrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizItemSenscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
