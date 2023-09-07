import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateLeadComponent } from './create-lead/create-lead.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ViewLeadComponent } from './view-lead/view-lead.component';

const routes: Routes = [
  {path:'', component:LoginScreenComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'createaccount', component:CreateAccountComponent},
  {path:'createlead', component:CreateLeadComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent},
  {path:'viewlead', component:ViewLeadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
