import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr />
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event" ></event-thumbnail>
            </div>
        </div>
    </div>`   
})

export class EventsListComponent implements OnInit{

    events: any[] //({ id: number; name: string; date: string; time: string; price: number; imageUrl: string; location: { address: string; city: string; country: string; }; sessions: { id: number; name: string; presenter: string; duration: number; level: string; abstract: string; voters: string[]; }[]; } | { id: number; name: string; date: string; time: string; price: number; imageUrl: string; onlineUrl: string; sessions: { id: number; name: string; presenter: string; duration: number; level: string; abstract: string; voters: string[]; }[]; })[];
    constructor(private eventService: EventService, private toastr: ToastrService ){        
    }

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }
    
    handleThumbnailClick(eventName){
        this.toastr.Success(eventName)
    }
}