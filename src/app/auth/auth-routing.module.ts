import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from '../admin/admin.component';
import { Client1Component } from '../client1/client1.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'client', component: Client1Component }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
