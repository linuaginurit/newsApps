import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryPipe } from './summary.pipe';
import { UsersModule } from './users/users.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    UsersComponent,
    HomeComponent,
    NotFoundComponent,
    NewsDetailComponent,
    SidebarComponent,
    NavbarComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
