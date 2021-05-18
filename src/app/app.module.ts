import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EmailRequestFeedbackPageComponent } from './pages/email-request-feedback-page/email-request-feedback-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { EmailRequestedPageComponent } from './pages/email-requested-page/email-requested-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestFeedbackPageComponent } from './pages/request-feedback-page/request-feedback-page.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EmailRequestFeedbackPageComponent,
    NavbarComponent,
    AdminPageComponent,
    PageNotFoundPageComponent,
    EmailRequestedPageComponent,
    RequestFeedbackPageComponent,
    FeedbackFormComponent,
    NavigationBarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDividerModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
