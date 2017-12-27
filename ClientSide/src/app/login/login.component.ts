import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  username;
  password;
  message;

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.router.navigateByUrl('/profile');
      alert("Already a User logged in");
    }
  }

  login(){
    var user={
      username:this.username,
      password:this.password
    };
    this.authService.loginUser(user)
      .subscribe(data=>{
        this.authService.storeUserData(data.tokken,data.user);
        if(data.tokken==undefined){
          this.message=data;
          localStorage.clear();
        }
        else{
          this.router.navigateByUrl('/profile');
        }
      });
  }

}
