import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Client1RoutingModule } from './client1-routing.module';
import { Client1Component } from './client1.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    Client1Component,
    PanierComponent
  ],
  imports: [
    CommonModule,
    Client1RoutingModule
  ]
})
export class Client1Module { }
