import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import User from 'src/app/components/users/models/user.model';
import UsersService from '../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit/*, OnDestroy*/ {
  user: User;
  // subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
             private userService: UsersService,
             private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getById(
      +this.route.snapshot.params['id']// Use snapshot for initialization
    );

    // this.subscriptions.push(
      this.route.params.subscribe(// subscribe to an observable if changes on the route will happen
      (params: Params) => this.user = this.userService.getById(+params['id'])
    );
    // );
  }

  edit() {
    this.router.navigate(['/users', this.user.id, 'edit']);
  }

  // ngOnDestroy() {
  //   this.subscriptions.forEach((subs) => subs.unsubscribe());
  // }

}
