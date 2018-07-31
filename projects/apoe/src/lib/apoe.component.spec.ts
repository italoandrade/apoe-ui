import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoeComponent } from './apoe.component';

describe('ApoeComponent', () => {
  let component: ApoeComponent;
  let fixture: ComponentFixture<ApoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
