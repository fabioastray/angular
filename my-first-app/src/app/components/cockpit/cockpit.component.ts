import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { randomInt } from '../../utils/number';
import { randomArrayValue } from '../../utils/array';
import { Server } from 'src/app/models/server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Input() serversLength: number;
  @Output() serverCreated = new EventEmitter<Server>();

  public serverName: string;
  public serverStatus: Array<string> = ['offline', 'online'];

  constructor() { }

  ngOnInit() {
    this.resetServerName();
  }

  createServer() {
    const server = new Server(
      randomInt(10),
      this.serverName,
      randomArrayValue(this.serverStatus)
    );

    this.resetServerName();
    // Emit event with server
    this.serverCreated.emit(server);
  }

  resetServerName() {
    this.serverName = '';
  }

  allowNewServer() {
    return this.serversLength < 3 && this.serverName.trim().length;
  }
}
