import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterYourTodo } from './enter-your-todo';

describe('EnterYourTodo', () => {
  let component: EnterYourTodo;
  let fixture: ComponentFixture<EnterYourTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterYourTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterYourTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
