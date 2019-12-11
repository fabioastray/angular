import { Component, OnInit } from '@angular/core';

import { Server } from '../../models/server';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: Array<Server>;
  noServersMessage = 'No servers found';

  constructor() { }

  ngOnInit() {
    this.servers = [];
  }

  onServerCreated(server: Server) {
    this.servers.push(server);
  }

  getServersLengthColor() {
    return this.servers.length >= 3 ? 'red' : '';
  }
}
