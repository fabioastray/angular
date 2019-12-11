import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  constructor() { }

  ngOnInit() {
  }

}
