import { Component, OnInit } from '@angular/core';

import { ServersService } from '../services/servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Server from '../models/server.model';
import { CanComponentDeactivate } from './services/can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = (params['allowEdit'] === '1');
    });
    const id: number = this.route.snapshot.params['id'] ? parseInt(this.route.snapshot.params['id'], 10) : null;
    this.server = this.serversService.getServer(id);
    this.serverName = this.server ? this.server.name : '';
    this.serverStatus = this.server ? this.server.status : '';
  }

  onUpdateServer() {
    this.serversService.updateServer(
      this.server.id, {name: this.serverName, status: this.serverStatus}
    );

    this.changesSaved = true;

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
