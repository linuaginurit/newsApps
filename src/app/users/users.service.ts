import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:User[]=[
  ]
  url ="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }
  //get all user 
  getAll(): Observable <User[]>{
    // return this.users;
    return this.http.get<User[]>(this.url);
  }
  addUser(user:User):Observable<User>{
    // this.users.push(user);
    return this.http.post<User>(this.url,user);
  }
  getById(id:number): Observable <User>{
    //find user by id
    // return this.users.find(u=>u.id==id)
    return this.http.get<User>(`${this.url}/${id}`)
  }
  editUser(id:number,user:User):Observable<User>{
    //edit
    return this.http.put<User>(`${this.url}/${id}`,user)
  }
  deleteUser(id:number):Observable<unknown>{
    //del user
    return this.http.delete(`${this.url}/${id}`)
  }
}
