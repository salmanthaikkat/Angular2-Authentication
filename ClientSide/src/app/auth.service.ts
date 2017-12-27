import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  token;
  user;

  constructor(private http:Http) { }

  registerUser(user){
    return this.http.post('http://localhost:3000/register',user).map(res=>res.json());
  }

  loginUser(user){
    return this.http.post('http://localhost:3000/login',user).map(res=>res.json());
  }

  getUser(id){
    return this.http.get('http://localhost:3000/user/'+id).map(res=>res.json());
  }

  storeUserData(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',user);
    this.token=token;
    this.user=user;
  }

}
