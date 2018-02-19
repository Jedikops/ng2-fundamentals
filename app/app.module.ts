import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    EventListResolver,
    CreateSessionComponenet,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    LocationValidator
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
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective, VoterService } from './common/index'
import { HttpModule } from '@angular/http'
declare let toastr: Toastr
declare let jQuery: Object

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
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
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        EventResolver,
        EventListResolver,
        AuthService,
        VoterService,
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