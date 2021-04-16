import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ContentsPageComponent } from './components/contents-page/contents-page.component';
import { TabularComponent } from './components/tabular/tabular.component';
import { FeedbackTabComponent } from './components/feedback-tab/feedback-tab.component';
import { PerformanceTabComponent } from './components/performance-tab/performance-tab.component';


const routes: Routes = [
  { path: 'navigation-bar', component: NavigationBarComponent },
  { path: 'contents-page', component: ContentsPageComponent },
  { path: 'tabular', component: TabularComponent },
  { path: 'feedback-tab', component: FeedbackTabComponent },
  { path: 'performance-tab', component: PerformanceTabComponent },
  // { path: '', component: 'contents-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
