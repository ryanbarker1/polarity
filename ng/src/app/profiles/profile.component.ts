import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Profile } from '../models/profile';
import { ProfilesService } from '../services/profiles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "book-el",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent {
    @Input() profile : Profile
    @Output() profileDeleted: EventEmitter<Profile> = new EventEmitter()
    expanded : boolean = false

    constructor(private booksService : ProfilesService, private toastr : ToastrService){}

    expandOrShrink(){
        this.expanded = !this.expanded
    }

    onDelete(profile : Profile){
        this.booksService.deleteBook(profile).subscribe(res => {
            this.profileDeleted.emit(res)
            this.toastr.success("The book has been successfully deleted.")
        })
    }
}