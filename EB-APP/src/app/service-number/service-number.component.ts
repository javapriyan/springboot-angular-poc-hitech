import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-number',
  templateUrl: './service-number.component.html',
  styleUrls: ['./service-number.component.scss'],
})
export class ServiceNumberComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      serviceNumber: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.appService.setData(null, null);
    this.appService.fetch(this.loginForm.value).subscribe(
      (data) => {
        const lastMeterReading =
          data['lastMeterReading'] && data['lastMeterReading'] !== 0
            ? data['lastMeterReading']
            : null;
        this.appService.setData(
          this.loginForm.value.serviceNumber,
          lastMeterReading
        );
        this.router.navigate(['/calculate']);
      },
      (error) => {
        alert('Something went wrong');
      }
    );
  }
}
