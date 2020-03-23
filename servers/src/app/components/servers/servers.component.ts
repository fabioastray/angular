import { Component, OnInit, OnDestroy } from '@angular/core';

import { Server } from '../../models/server';
import { ServersService } from 'src/app/services/servers.service';
import { Subscription } from 'rxjs';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit, OnDestroy {

  servers: Array<Server> = [];
  noServersMessage = 'No servers found';
  private addEeventSubscription: Subscription;

  constructor(private serversService: ServersService) {
    this.addEeventSubscription = this.serversService.addEvent.subscribe(this.onServerAddEvent);
  }

  ngOnInit() {
    this.servers = this.serversService.getAll();
  }

  ngOnDestroy() {
    this.addEeventSubscription.unsubscribe();
  }

  onServerAddEvent(status: string) {
    alert(status);
  }

  getServersLengthColor() {
    return this.servers.length >= 3 ? 'red' : '';
  }
}
