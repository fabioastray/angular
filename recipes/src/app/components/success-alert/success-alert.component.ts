import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  constructor() { }

  ngOnInit() {
  }

}
