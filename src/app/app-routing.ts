import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';


import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';

import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [

    // Site routes goes here
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'about', component: AboutComponent},
            {path: 'test/:id', component: AboutComponent}
        ]
    },

    // App routes goes here here
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'profile', component: ProfileComponent}
        ]
    },

    // no layout routes
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

/*const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent}
];*/

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}


