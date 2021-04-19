import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { GridComponent } from './components/grid/grid.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

const routes: Routes = [
  { path: 'navigation-bar', component: NavigationBarComponent },
  { path: 'grid', component: GridComponent },
  { path: 'content-page', component: ContentPageComponent },
  // { path: '', component: 'contents-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
