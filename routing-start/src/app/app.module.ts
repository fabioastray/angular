import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserComponent } from './components/users/user/user.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersService } from './components/servers/services/servers.service';
import UsersService from './components/users/services/users.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CanDeactivateGuard } from './components/servers/edit-server/services/can-deactivate-guard.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ServerResolver } from './components/servers/services/server-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ServersService,
    UsersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
