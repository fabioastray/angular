import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';

import { ServersService } from '../services/servers.service';
import Server from '../models/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServersService,
             private route: ActivatedRoute,
             private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => this.server = data['server']);
    // const id: number = +this.route.snapshot.params['id'];
    // this.server = this.getServer(id);
    // this.route.params
    //   .subscribe((params: Params) => this.server = this.getServer(+params['id']));
  }

  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

  getServer(id: number): Server {
    return this.serversService.getServer(id);
  }

}
