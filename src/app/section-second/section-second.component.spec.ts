import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSecondComponent } from './section-second.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-percentbar',
  template: `<h5>Percent Bar</h5>`
})
class TestPercentbarComponent {
  @Input() public percentValue: any;
  @Input() public calc_percentage: any;
}

describe('SectionSecondComponent', () => {
  let component: SectionSecondComponent;
  let fixture: ComponentFixture<SectionSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SectionSecondComponent,
        TestPercentbarComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
