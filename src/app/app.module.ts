import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LaptopComponent } from './laptop/laptop.component';
import { DesktopComponent } from './desktop/desktop.component';
import { PrinterComponent } from './printer/printer.component';
import { NetworkingComponent } from './networking/networking.component';
import { RecoveryComponent } from './recovery/recovery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponent,
    FooterComponent,
    LaptopComponent,
    DesktopComponent,
    PrinterComponent,
    NetworkingComponent,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
