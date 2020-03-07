import { Component, OnInit } from '@angular/core';
import range from 'lodash.range';

@Component({
  selector: 'app-section-second',
  templateUrl: './section-second.component.html',
  styleUrls: ['./section-second.component.css']
})
export class SectionSecondComponent implements OnInit {
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