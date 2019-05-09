import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrtherapyComponent } from './vrtherapy.component';

describe('VrtherapyComponent', () => {
  let component: VrtherapyComponent;
  let fixture: ComponentFixture<VrtherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrtherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrtherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
