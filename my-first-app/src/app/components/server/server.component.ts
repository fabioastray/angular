import {
    Component, Input, OnChanges, OnInit, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef/*, DoCheck*/
  } from '@angular/core';
import { Server } from '../../models/server';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent
    implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy/*, DoCheck*/ {

    @Input() server: Server;
    @ViewChild('labelElement', { static: true }) labelElement: ElementRef;

    constructor() {
        console.log('constructor');
    }

    statusOnline() {
        return this.server.status === 'online';
    }

    statusOffline() {
        return this.server.status === 'offline';
    }

    // ---- Lifecycle events ------ //

    ngOnChanges() {
        console.log('ngOnChanges', this.labelElement);
    } // Called after a bound input property changes

    ngOnInit() {
        console.log('ngOnInit', this.labelElement.nativeElement.textContent);
    } // Called once the component is initialized

    // ngDoCheck() {}  // Called during every change detection run

    ngAfterContentInit() {
        console.log('ngAfterContentInit', this.labelElement.nativeElement.textContent);
    } // Called after content(ng-content) has been projected into the view

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked', this.labelElement.nativeElement.textContent);
    } // Called every time the projected content(ng-content) has been checked

    ngAfterViewInit() {
        console.log('ngAfterViewInit', this.labelElement.nativeElement.textContent);
    } // Called after the component's view(and child views) have been rendered

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked', this.labelElement.nativeElement.textContent);
    } // Called after the component's view(and child views) have been checked

    ngOnDestroy() {
        console.log('ngOnDestroy');
    } // Called once the component is abut to ne destroyed
}
