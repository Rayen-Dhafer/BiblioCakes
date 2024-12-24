import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Client2Component } from './client2.component';

const routes: Routes = [{ path: '', component: Client2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Client2RoutingModule { }
