import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutMeComponent } from './features/about-me/about-me.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },



];
