import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListerCakeComponent } from './lister-cake/lister-cake.component';
import { AjouterCakeComponent } from './ajouter-cake/ajouter-cake.component';
import { AuthGuard } from '../auth/auth.guard';
import { ModifierComponent } from './modifier/modifier.component';
const routes: Routes = [{ path: '', component: AdminComponent,canActivate:[AuthGuard] },
{path :'lister-cake',component:ListerCakeComponent},
{path :'ajouter-cake',component:AjouterCakeComponent},
{path :'modifier/:Cake',component:ModifierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
