import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es-GT';
import localFr from '@angular/common/locales/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordSecurePipe } from './pipes/password-secure.pipe';
registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordSecurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-GT'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
