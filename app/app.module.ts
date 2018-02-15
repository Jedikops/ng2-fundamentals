import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponenet,
    SessionListComponent,
    DurationPipe
} from './events/index'

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

declare let toastr: Toastr

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponenet,
        Error404Component,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        EventRouteActivator,
        EventListResolver,
        AuthService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }],
    bootstrap: [EventsAppComponent]

})
export class AppModule {


}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return confirm("Are you sure?")
    return true

}