import { ScrollPercentageDirective } from './scroll-percentage.directive';
import {TestBed} from '@angular/core/testing';
import { ElementRef } from '@angular/core';

describe('ScrollPercentageDirective', () => {
  let elementRef: ElementRef;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollPercentageDirective]
    });
  });
  it('should create', () => {
    const directive = new ScrollPercentageDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
