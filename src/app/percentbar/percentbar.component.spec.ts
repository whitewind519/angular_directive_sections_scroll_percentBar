import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentbarComponent } from './percentbar.component';

describe('PercentbarComponent', () => {
  let component: PercentbarComponent;
  let fixture: ComponentFixture<PercentbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
