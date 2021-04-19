import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { EmailRequestFeedbackPageComponent } from './pages/email-request-feedback-page/email-request-feedback-page.component';
import { EmailRequestedPageComponent } from './pages/email-requested-page/email-requested-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { RequestFeedbackPageComponent } from './pages/request-feedback-page/request-feedback-page.component';
import { AccessTokenGuard } from './token/access-token.guard';



const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'email-request-feedback-page', component: EmailRequestFeedbackPageComponent, canActivate : [AccessTokenGuard]},
  {path: 'request-email', component: RequestFeedbackPageComponent, canActivate : [AccessTokenGuard]},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'email-requested-page', component: EmailRequestedPageComponent},
  {path: '**', redirectTo: 'PageNotFoundPageComponent', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
