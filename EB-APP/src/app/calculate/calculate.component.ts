import { Component, OnInit, Input } from '@angular/core';

export interface IReadingData {
  id: string;
  lastMeterReading: number;
  currentReading: number;
  amount: number;
  unitsConsumed: number;
  createTs: number;
  updateTs: number;
}

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss'],
})
export class CalculateComponent implements OnInit {
  @Input() readingData: IReadingData;
  isHavePreviousReading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    if (this.readingData) {
      console.log(this.readingData);
    }
  }
}
