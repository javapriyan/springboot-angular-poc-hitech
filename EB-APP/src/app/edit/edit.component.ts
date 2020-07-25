import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private appService: AppService
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
    console.log($event);
  }
}
