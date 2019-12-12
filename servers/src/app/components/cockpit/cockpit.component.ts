import { Component, OnInit, Input } from '@angular/core';

import { randomArrayValue } from '../../utils/array';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Input() serversLength: number;

  public serverName: string;
  private serverStatus: Array<string>;

  constructor(private serverService: ServersService) { }

  ngOnInit() {
    this.serverStatus = ['offline', 'online'];
    this.resetServerName();
  }

  createServer() {
    this.serverService.add(this.serverName, randomArrayValue(this.serverStatus));

    this.resetServerName();
  }

  resetServerName() {
    this.serverName = '';
  }

  allowNewServer() {
    return this.serversLength < 3 /*&& this.serverName.trim().length*/;
  }
}
