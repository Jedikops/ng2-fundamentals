import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from './shared/event.service'
import { IEvent} from './shared/event.model'
@Component({
    templateUrl:'app/events/create-event.component.html',
    styles:[`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent implements OnInit{
    isDirty:boolean = false
    constructor(private router:Router, private eventService:EventService){}
    event: IEvent

    ngOnInit(){
        this.event = {
            id: 123,
            name: 'Luke',
            date: new Date('01/21/2015'),
            time: '10:00 am',
            price: 123,
            imageUrl: 'https://cdn.vox-cdn.com/thumbor/OyCa2nLPSsgyR1KQ3KRQqUXgCh0=/0x0:1920x800/1200x800/filters:focal(664x123:970x429)/cdn.vox-cdn.com/uploads/chorus_image/image/58118337/sw_force_awakens_movie_screencaps.com_14920.0.jpg',
            location:{
                address: 'Bakers st.',
                city: 'Kraków',
                country: 'Poland'
            },
            onlineUrl: 'http://google.com',
            sessions: []


        }
    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}