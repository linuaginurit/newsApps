import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"news/:id",component:NewsDetailComponent},
      {path:"notfound",component:NotFoundComponent},
      {path:"**",redirectTo:"notfound"}
    ]),
  ],  
  exports:[RouterModule]
})
export class AppRoutingModule {}