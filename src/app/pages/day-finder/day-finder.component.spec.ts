import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayFinderComponent } from './day-finder.component';

describe('DayFinderComponent', () => {
  let component: DayFinderComponent;
  let fixture: ComponentFixture<DayFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
