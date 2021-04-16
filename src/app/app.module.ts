import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ContentsPageComponent } from './components/contents-page/contents-page.component';
import { TabularComponent } from './components/tabular/tabular.component';
import { FeedbackTabComponent } from './components/feedback-tab/feedback-tab.component';
import { PerformanceTabComponent } from './components/performance-tab/performance-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ContentsPageComponent,
    TabularComponent,
    FeedbackTabComponent,
    PerformanceTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatFormFieldModule,
    
    
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }


