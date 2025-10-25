import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenPlus } from './green-plus';

describe('GreenPlus', () => {
  let component: GreenPlus;
  let fixture: ComponentFixture<GreenPlus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenPlus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenPlus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
