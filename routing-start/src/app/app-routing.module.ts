import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserComponent } from './components/users/user/user.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerComponent } from './components/servers/server/server.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { CanDeactivateGuard } from './components/servers/edit-server/services/can-deactivate-guard.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ServerResolver } from './components/servers/services/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'users', component: UsersComponent,
        children: [
            { path: ':id', component: UserComponent }
        ]
    },
    {
        path: 'servers',
        component: ServersComponent,
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'} },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
