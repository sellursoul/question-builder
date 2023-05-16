import {Component, OnInit} from '@angular/core';
import {ModalWindowComponent} from "./modal-window/modal-window.component";
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dataService.openDialog(ModalWindowComponent)
  }
}
