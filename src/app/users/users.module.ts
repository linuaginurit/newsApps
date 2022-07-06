import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListlUserComponent } from './listl-user/listl-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';



@NgModule({
  declarations: [
    ListlUserComponent,
    FormUserComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule,
  ],
  // providers:[
  //   UsersService
  // ]
})
export class UsersModule { }
