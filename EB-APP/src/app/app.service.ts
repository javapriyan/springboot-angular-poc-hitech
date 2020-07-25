import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// remove mock service and then change http calls to respective http method
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _serviceNumber = null;
  private _lastMeterReading = null;
  private _isNewUser = null;

  get serviceNumber() {
    return this._serviceNumber;
  }

  get isNewUser() {
    return this._isNewUser;
  }

  get lastMeterReading() {
    return this._lastMeterReading;
  }

  constructor(private http: HttpClient) {}

  getHistoryById(id: string): Observable<any> {
    return this.http.get<any>(environment.api.getHistoryById);
  }

  setData(
    serviceNumber: string,
    lastMeterReading: number = 0,
    isNewUser: boolean = true
  ) {
    this._lastMeterReading = lastMeterReading;
    this._serviceNumber = serviceNumber;
    this._isNewUser = isNewUser;
  }

  onCalculate(consumed: number): number {
    if (consumed <= 100) {
      return 0.0;
    } else if (consumed <= 200) {
      let service_charge = 20;
      let rate_per_unit = 1.5;

      let less_than_200 = (consumed - 100) * rate_per_unit;
      return less_than_200 + service_charge;
    } else if (consumed <= 500) {
      let service_charge = 30;
      let rate_per_unit_upto_200 = 2;
      let rate_per_unit_201_to_500 = 3;

      let from_101_200 = 100 * rate_per_unit_upto_200;
      let above_200 = (consumed - 200) * rate_per_unit_201_to_500;

      return from_101_200 + above_200 + service_charge;
    } else {
      let service_charge = 50;
      let rate_per_unit_upto_200 = 3.5;
      let rate_per_unit_201_to_500 = 4.6;
      let rate_above_500 = 6.6;

      let from_101_200 = 100 * rate_per_unit_upto_200;
      let from_201_500 = 300 * rate_per_unit_201_to_500;
      let above_500 = (consumed - 200) * rate_above_500;
      return from_101_200 + from_201_500 + above_500 + service_charge;
    }
  }

  fetch(payload: { serviceNumber: string }) {
    return this.http.get(environment.api.fetch);
    // return this.http.post(environment.api.fetch, payload);
  }

  saveLastMeterReading({ lastMeterReading }) {
    const payload = {
      lastMeterReading,
      serviceNumber: this.serviceNumber,
    };
    return this.http.get(environment.api.saveLastMeterReading);
    // return this.http.post(environment.api.saveLastMeterReading, payload);
  }

  saveCalculation({ currentReading, unitsConsumed, amount }) {
    const payload = {
      currentReading,
      unitsConsumed,
      amount,
      serviceNumber: this.serviceNumber,
    };
    return this.http.get(environment.api.saveCalculation);
    // return this.http.post(environment.api.saveCalculation, payload);
  }

  editCalculation({ currentReading, unitsConsumed, amount }) {
    const payload = {
      currentReading,
      unitsConsumed,
      amount,
      serviceNumber: this.serviceNumber,
    };
    return this.http.get(environment.api.editCalculation);
    // return this.http.put(environment.api.editCalculation, payload);
  }
}
