import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';

import { BankService } from './bank.service'

import { router } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
