import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component'

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  }, {
    path: 'contact', component: ContactComponent
  }, {
    path: 'services', component: ServicesComponent
  }, {
    path: 'events', component: EventsComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, ContactComponent, ServicesComponent, EventsComponent]
