import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Client1Component } from './client1.component';

const routes: Routes = [{ path: '', component: Client1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Client1RoutingModule { }
