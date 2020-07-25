import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

// Component communication example

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  readingData;
  constructor(
    private activeRoute: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activeRoute.snapshot.params;
    if (id) {
      this.appService.getHistoryById(id).subscribe(
        (data) => {
          this.readingData = data;
        },
        (error) => {
          alert('Unable to load data');
        }
      );
    }
  }
  onEdit($event) {
    this.appService.editCalculation($event).subscribe(
      (data) => {
        alert('Edited successfully');
        this.router.navigate(['/history']);
      },
      (error) => {
        alert('Something went wrong ');
      }
    );
  }
}
