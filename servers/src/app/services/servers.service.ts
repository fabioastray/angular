import { Injectable, EventEmitter } from '@angular/core';

import { Server } from '../models/server';
import { randomInt } from '../utils/number';
import { LoggingService } from './logging.service';
import { Subject } from 'rxjs';

@Injectable()
export class ServersService {

  addEvent = new Subject<string>();
  servers: Server[] = [];

  constructor(private loggingService: LoggingService) {}

  getAll() {
    return this.servers;
  }

  getServer(id: number) {
    return this.servers.find((s: Server) => s.id === id);
  }

  add(name: string, status: string) {
    const server = new Server(randomInt(10), name, status);
    this.servers.push(server);

    this.loggingService.log('server added', server);
    this.addEvent.next('server added');
  }

  update(pos: number, server: Server) {
    this.servers[pos] = server;
  }
}
