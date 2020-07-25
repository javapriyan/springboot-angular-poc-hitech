import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

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
  @Input() readingData: IReadingData; // if available consider as editMode
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  isHavePreviousReading: boolean = false;

  calculateForm: FormGroup;

  lastMeterReadingForm: FormGroup = new FormGroup({
    lastMeterReading: new FormControl(''),
  });

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    if (this.readingData) {
      this.onCreateCalculateForm(
        this.readingData.lastMeterReading,
        this.readingData.currentReading
      );
    } else {
      if (!this.appService.isNewUser) {
        this.onCreateCalculateForm(this.appService.lastMeterReading, null);
        this.isHavePreviousReading = true;
      }
    }
  }
  onCreateCalculateForm(previousValue: number, currentValue: number = null) {
    this.calculateForm = new FormGroup({
      lastMeterReading: new FormControl(previousValue),
      currentReading: new FormControl(currentValue, Validators.required),
    });
  }
  onSubmit() {
    const { lastMeterReading, currentReading } = this.calculateForm.value;
    const unitsConsumed = currentReading - lastMeterReading;
    const amount = this.appService.onCalculate(unitsConsumed);
    const payload = {
      lastMeterReading,
      currentReading,
      unitsConsumed,
      amount,
    };
    if (this.readingData) {
      this.onEdit.emit(payload);
    } else {
      this.appService.saveCalculation(payload).subscribe(
        (resp) => {
          alert(`Amount ${amount}`);
          this.router.navigate(['history']);
        },
        (error) => {
          alert('Something went wrong');
        }
      );
    }
  }

  onSave() {
    this.appService
      .saveLastMeterReading(this.lastMeterReadingForm.value)
      .subscribe(
        (resp) => {
          this.appService.setData(
            this.appService.serviceNumber,
            this.lastMeterReadingForm.value.lastMeterReading,
            false
          );
          this.onCreateCalculateForm(this.appService.lastMeterReading, null);
          this.isHavePreviousReading = true;
        },
        (error) => {
          alert('Something went wrong');
        }
      );
  }
}
