import { 
    EventsListComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventListResolver,
    CreateEventComponent
} from './events/index'

import { Routes } from "@angular/router"
import { Error404Component } from "./errors/404.component";
import { CreateSessionComponenet } from './events/event-details/index';

export const appRoutes:Routes = [
    
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver}},
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponenet },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]