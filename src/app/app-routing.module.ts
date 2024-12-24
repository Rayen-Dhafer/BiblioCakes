import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PanierComponent } from './client1/panier/panier.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { SucresComponent } from './sucres/sucres.component';

const routes: Routes = [
 { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
 { path: 'client1', loadChildren: () => import('./client1/client1.module').then(m => m.Client1Module) },
 { path: 'client2', loadChildren: () => import('./client2/client2.module').then(m => m.Client2Module) },
 { path: '',redirectTo:'home',pathMatch:'full' },
 { path:"home",component:HomeComponent },
 { path:"sucres",component:SucresComponent},
 { path:"sales",component:SalesComponent},
 { path:"login",component:LoginComponent},
 {path:"panier",component:PanierComponent},
 { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
