import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Client2RoutingModule } from './client2-routing.module';
import { Client2Component } from './client2.component';


@NgModule({
  declarations: [
    Client2Component
  ],
  imports: [
    CommonModule,
    Client2RoutingModule
  ]
})
export class Client2Module { }
