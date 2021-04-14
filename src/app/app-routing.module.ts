import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { EmailRequestFeedbackPageComponent } from './pages/email-request-feedback-page/email-request-feedback-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  {path: ' ', redirectTo: 'LoginPageComponent', pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'email-request-feedback-page', component: EmailRequestFeedbackPageComponent},
  {path: 'admin-page', component: AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
