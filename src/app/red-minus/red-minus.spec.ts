import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedMinus } from './red-minus';

describe('RedMinus', () => {
  let component: RedMinus;
  let fixture: ComponentFixture<RedMinus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedMinus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedMinus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
