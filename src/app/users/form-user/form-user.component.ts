import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  user:User={
    id:0,
    name:"Nama User",
    username:"username",
    email : "email@"
  }
  isEdit = false;
  idUser:string|null='';
  constructor(private router:Router, 
    private userService:UsersService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param=>{
      this.isEdit = param ['edit'] == 'true'
    })
    this.activatedRoute.paramMap.subscribe(param=>{
      this.idUser = param.get('id');
      if(this.idUser){
        this.userService.getById(parseInt(this.idUser)).subscribe(res=>{
          this.user = res;
        })
      }
    })

  }
  doSimpan(){
    //simpan data

    //jika sukses redirect to list user
    // this.router.navigate(['/users',{user:'adhi'}])
    console.log("adding new user with data:",this.user);
    this.userService.addUser(this.user).subscribe(res=>{
      if(res) this.router.navigate(['/users'])
    })

  }
  doUpdate(){
    //simpan data

    //jika sukses redirect to list user
    // this.router.navigate(['/users',{user:'adhi'}])
    console.log("updating new user with data:",this.user);
    if(this.idUser){
      this.userService.editUser( parseInt (this.idUser),this.user).subscribe(res=>{
        if(res) this.router.navigate(['/users'])
      })
    }
    
  }

}
