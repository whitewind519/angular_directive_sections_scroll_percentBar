import { Component, OnInit } from '@angular/core';
import range from 'lodash.range';

@Component({
  selector: 'app-section-first',
  templateUrl: './section-first.component.html',
  styleUrls: ['./section-first.component.css']
})
export class SectionFirstComponent implements OnInit {
  public demoRange: number[];
  percentValue: any;
  calc_percentage: any;

  constructor() {
    this.demoRange = range(4);
  }

  public ngOnInit(): void {

  }

  changeScrollPercentage(percentValue) {
    this.percentValue = percentValue;
    this.calc_percentage = percentValue*55/window.innerWidth;
  }
}