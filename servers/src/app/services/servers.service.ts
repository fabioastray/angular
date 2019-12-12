import { Injectable, EventEmitter } from '@angular/core';

import { Server } from '../models/server';
import { randomInt } from '../utils/number';
import { LoggingService } from './logging.service';

@Injectable()
export class ServersService {

  addEvent = new EventEmitter<string>();
  servers: Server[] = [];

  constructor(private loggingService: LoggingService) {}

  getAll() {
    return this.servers;
  }

  add(name: string, status: string) {
    const server = new Server(randomInt(10), name, status);
    this.servers.push(server);

    this.loggingService.log('server added', server);
    this.addEvent.emit('server added');
  }

  update(pos: number, server: Server) {
    this.servers[pos] = server;
  }
}
