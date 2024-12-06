import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ApiComponent } from './Components/api/api.component';

const routes: Routes = [
  {
    path:'', component:ApiComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
   path:'login', component:LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
