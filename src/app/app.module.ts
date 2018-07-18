import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {AppHeaderComponent} from './_layout/app-header/app-header.component';
import {SiteHeaderComponent} from './_layout/site-header/site-header.component';
import {SiteFooterComponent} from './_layout/site-footer/site-footer.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';

import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './app-routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    declarations: [
        AppComponent,
        HelloComponent,
        AppLayoutComponent,
        SiteLayoutComponent,
        AppHeaderComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        LoginComponent,
        DashboardComponent,
        HomeComponent,
        AboutComponent,
        RegisterComponent,
        ProfileComponent,


        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
