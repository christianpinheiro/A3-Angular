import { Component, OnInit } from '@angular/core';
import { ChristianListServiceService } from '../christian-list-service.service';

@Component({
  selector: 'app-christian-list-component',
  templateUrl: './christian-list-component.component.html',
  styleUrls: ['./christian-list-component.component.css'],
})
export class ChristianListComponentComponent {
  constructor(public christianListService: ChristianListServiceService) {}

  updateChristianList() {
    this.christianListService.update();
  }
}
