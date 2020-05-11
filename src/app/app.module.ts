import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TercoDetailsComponent } from './terco-details/terco-details.component';
import { TercoRezarComponent } from './terco-rezar/terco-rezar.component';
import { TercoHomeComponent } from './terco-home/terco-home.component';
import { TercoSobreComponent } from './terco-sobre/terco-sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    TercoDetailsComponent,
    TercoRezarComponent,
    TercoHomeComponent,
    TercoSobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
