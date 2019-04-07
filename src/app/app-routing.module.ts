import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component'
import { LaptopComponent } from './laptop/laptop.component';
import { DesktopComponent } from './desktop/desktop.component';
import { PrinterComponent } from './printer/printer.component';
import { NetworkingComponent } from './networking/networking.component';
import { RecoveryComponent } from './recovery/recovery.component';

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
    path: 'laptop', component: LaptopComponent
  }, {
    path: 'desktop', component: DesktopComponent
  }, {
    path: 'printer', component: PrinterComponent
  }, {
    path: 'networking', component: NetworkingComponent
  }, {
    path: 'recovery', component: RecoveryComponent
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
