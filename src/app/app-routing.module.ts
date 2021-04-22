import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { SampleComponent } from './components/sample/sample.component';

const routes: Routes = [
  { path: 'navigation-bar', component: NavigationBarComponent },
  { path: 'feedback-form', component: FeedbackFormComponent },
  { path: 'sample', component: SampleComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
