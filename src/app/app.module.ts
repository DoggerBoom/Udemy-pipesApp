import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import localeEsMx from '@angular/common/locales/es-MX'

import { registerLocaleData } from '@angular/common';



registerLocaleData(localeEsMx);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule

  ],
  providers: [
  {provide: LOCALE_ID, useValue: 'es-Mx'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
