import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IReadingData } from '../calculate/calculate.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  history: IReadingData[];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.loadHistory().subscribe(
      (resp) => {
        this.history = resp['data'];
      },
      (error) => alert('Something went wrong')
    );
  }

  delete(id: string, index: number) {
    this.appService.deleteHistory(id).subscribe(
      (resp) => {
        this.history.splice(index, 1);
      },
      (error) => alert('Something went wrong')
    );
  }
}
