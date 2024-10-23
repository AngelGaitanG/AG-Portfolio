import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ResumeComponent } from './features/resume/resume.component';
import { animation } from '@angular/animations';
import { PortfolioComponent } from './features/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent, 
    },
    {
        path: 'about-me',
        component: AboutMeComponent, 
    },
    {
        path: 'resume',
        component: ResumeComponent, 
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },



];
