import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListerCakeComponent } from './lister-cake/lister-cake.component';
import { AjouterCakeComponent } from './ajouter-cake/ajouter-cake.component';
import { ModifierComponent } from './modifier/modifier.component';
import { FormsModule,NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    ListerCakeComponent,
    AjouterCakeComponent,
    ModifierComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
