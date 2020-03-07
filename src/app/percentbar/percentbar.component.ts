import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-percentbar',
  templateUrl: './percentbar.component.html',
  styleUrls: ['./percentbar.component.css']
})
export class PercentbarComponent implements OnInit {

  @Input() public percentValue: any;
  @Input() public calc_percentage: any;

  constructor() { }

  ngOnInit() {
  }

}
