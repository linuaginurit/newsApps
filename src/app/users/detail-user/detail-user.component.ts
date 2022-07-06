import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  user!:User;
  id!:string|null;

  constructor(private userService:UsersService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    //baca parameter id 
    // this.router.paramMap.subscribe(param=>{
    //   this.id = param.get('id');
    //   if(this.id){
    //     this.userService.getById(parseInt(this.id)).subscribe(data=>{
    //       this.user=data;
    //     })
    //   }
  //   // })
  this.router.params.pipe(
    //get user dng id tertentu
    switchMap((param:Params)=>{
      console.log(param)
      return this.userService.getById(param['id'])
    })
 ).subscribe(u=>this.user=u) 
}

}
