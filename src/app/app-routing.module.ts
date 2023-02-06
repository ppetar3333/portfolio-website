import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './@pages/about/about.component';
import { ContactComponent } from './@pages/contact/contact.component';
import { ExperienceComponent } from './@pages/experience/experience.component';
import { HomeComponent } from './@pages/home/home.component';
import { StartComponent } from './@pages/start/start.component';
import { WorkComponent } from './@pages/work/work.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'expirience',
    component: ExperienceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
