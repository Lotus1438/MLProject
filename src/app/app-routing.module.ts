import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { EmailRequestComponent } from './components/email-request/email-request.component';

const routes: Routes = [
  { path: 'navigation-bar', component: NavigationBarComponent },
  { path: 'feedback-form', component: FeedbackFormComponent },
  { path: 'email-request', component: EmailRequestComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
