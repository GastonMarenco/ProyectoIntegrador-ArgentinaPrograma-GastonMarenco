import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpYEducComponent } from './exp-y-educ.component';

describe('ExpYEducComponent', () => {
  let component: ExpYEducComponent;
  let fixture: ComponentFixture<ExpYEducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpYEducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpYEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
