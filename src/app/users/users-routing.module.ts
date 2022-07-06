import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { FormUserComponent } from '../users/form-user/form-user.component';
import { ListlUserComponent } from '../users/listl-user/listl-user.component';
import { UsersComponent } from './users.component';
import { AuthService } from '../auth.service';

const routes: Routes = [
  {path:"users",component:UsersComponent,
  children:[
    {path:"",component:ListlUserComponent},
    // {path:"add",component:FormUserComponent,canActivate:[AuthService]},
    {path:"add",component:FormUserComponent},
    {path:":id",component:DetailUserComponent},
    // {path:":id/edit",component:FormUserComponent,canActivate:[AuthService]},
    {path:":id/edit",component:FormUserComponent},
  ]    
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
