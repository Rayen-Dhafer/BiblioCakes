import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatMenuModule} from '@angular/material/menu';
import { SalesComponent } from './sales/sales.component';
import { SucresComponent } from './sucres/sucres.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    SalesComponent,
    SucresComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
