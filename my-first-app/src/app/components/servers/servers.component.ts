import { Component, OnInit } from '@angular/core';

import { Server } from '../../models/server';
import { randomInt } from '../../utils/number';
import { randomArrayValue } from '../../utils/array';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName: string;
  servers: Array<Server>;
  serverStatus: Array<string> = ['offline', 'online'];
  noServersMessage = 'No servers found';

  constructor() { }

  ngOnInit() {
    this.resetServerName();
    this.servers = [];
  }

  createServer() {
    const server = new Server(
      randomInt(10),
      this.serverName,
      randomArrayValue(this.serverStatus)
    );

    this.servers.push(server);
    this.resetServerName();
  }

  resetServerName() {
    this.serverName = '';
  }

  allowNewServer() {
    return this.servers.length < 3 && this.serverName.trim().length;
  }

  getServersLengthColor() {
    return this.servers.length >= 3 ? 'red' : '';
  }
}
