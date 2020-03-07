import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFirstComponent } from './section-first.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-percentbar',
  template: `<h5>Percent Bar</h5>`
})
class TestPercentbarComponent {
  @Input() public percentValue: any;
  @Input() public calc_percentage: any;
}

describe('SectionFirstComponent', () => {
  let component: SectionFirstComponent;
  let fixture: ComponentFixture<SectionFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SectionFirstComponent,
        TestPercentbarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
