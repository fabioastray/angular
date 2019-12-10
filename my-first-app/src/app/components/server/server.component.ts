import { Component, Input } from '@angular/core';

import { Server } from '../../models/server';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    @Input() server: Server;

    statusOnline() {
        return this.server.status === 'online';
    }

    statusOffline() {
        return this.server.status === 'offline';
    }
}
