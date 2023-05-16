import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/services/data.service";
import {combineLatest, map} from "rxjs";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  data: any[]

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.answers$.subscribe(data => {
      this.data = data
    });
  }
}
