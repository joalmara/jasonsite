import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleeploggerComponent } from './sleeplogger.component';

describe('SleeploggerComponent', () => {
  let component: SleeploggerComponent;
  let fixture: ComponentFixture<SleeploggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleeploggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleeploggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
