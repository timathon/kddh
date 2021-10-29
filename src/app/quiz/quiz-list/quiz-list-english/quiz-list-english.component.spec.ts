import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListEnglishComponent } from './quiz-list-english.component';

describe('QuizListEnglishComponent', () => {
  let component: QuizListEnglishComponent;
  let fixture: ComponentFixture<QuizListEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizListEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizListEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
