import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'home', loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  
/*   {
    path: 'login', loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginModule)
  } */

  {path:'', component:HomeComponent},
  {path:'**',pathMatch: 'full', redirectTo : 'home'} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
