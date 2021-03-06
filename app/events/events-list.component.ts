import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr />
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event" ></event-thumbnail>
            </div>
        </div>
    </div>`   
})

export class EventsListComponent implements OnInit{

    events: IEvent[] //({ id: number; name: string; date: string; time: string; price: number; imageUrl: string; location: { address: string; city: string; country: string; }; sessions: { id: number; name: string; presenter: string; duration: number; level: string; abstract: string; voters: string[]; }[]; } | { id: number; name: string; date: string; time: string; price: number; imageUrl: string; onlineUrl: string; sessions: { id: number; name: string; presenter: string; duration: number; level: string; abstract: string; voters: string[]; }[]; })[];
    constructor(private eventService: EventService, private route:ActivatedRoute ){        
    }

    ngOnInit(): void {
        //#<!--this.eventService.getEvents().subscribe(events => { this.events = events; })-->#/*
        this.events = this.route.snapshot.data['events']
    }
    
}