import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-listl-user',
  templateUrl: './listl-user.component.html',
  styleUrls: ['./listl-user.component.css'],
  // providers:[UsersService]
})
export class ListlUserComponent implements OnInit {
  users:User[]=[];
   //dependency injection 
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    // this.users=this.userService.getAll();
    this.userService.getAll().subscribe(res=>{
      this.users=res;
      console.log(res);
    })
  }
  doDelete(id:number){
    console.log("delete user with id", id);
    this.userService.deleteUser(id).subscribe(res=>{
      console.log(res);
    })

  }

}
