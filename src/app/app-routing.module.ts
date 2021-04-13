import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RequestFeedbackPageComponent } from './pages/request-feedback-page/request-feedback-page.component';

const routes: Routes = [
  {path: ' ', redirectTo: 'LoginPageComponent', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'request-feedback-form', component: RequestFeedbackPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
