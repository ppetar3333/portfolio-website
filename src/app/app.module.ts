import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonUiModule } from './@ui/common-ui.module';
import { HomeComponent } from './@pages/home/home.component';
import { StartComponent } from './@pages/start/start.component';
import { HeaderComponent } from './@components/header/header.component';
import { NavComponent } from './@components/nav/nav.component';
import { AboutComponent } from './@pages/about/about.component';
import { ContactComponent } from './@pages/contact/contact.component';
import { ExperienceComponent } from './@pages/experience/experience.component';
import { WorkComponent } from './@pages/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonUiModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
