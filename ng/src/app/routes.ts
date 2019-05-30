import { Routes } from '@angular/router'
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileFormComponent } from './profiles/profile-form.component';

export const routes : Routes = [
    {path: 'profiles', component: ProfilesComponent},
    {path: 'profiles/new', component: ProfileFormComponent},
    {path: 'profiles/:id/edit', component: ProfileFormComponent},

    
    {path: '', redirectTo: '/profiles', pathMatch: 'full'}
]