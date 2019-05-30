import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfilesService } from '../services/profiles.service';

@Component({
    //selector: 'books-el',
    templateUrl: './profiles.component.html'
})
export class ProfilesComponent implements OnInit {
    constructor(private profilesService : ProfilesService){}
    profiles : Profile[] = []

    ngOnInit(): void {
        this.updateListing()
    }

    updateListing(){
        this.profilesService.getBooks().subscribe(data => this.profiles = data)
    }
    
 

}