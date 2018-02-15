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
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index'

declare let toastr: Toastr
declare let jQuery : Object

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
        SimpleModalComponent,
        DurationPipe,
        ModalTriggerDirective],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
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