import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  username;
  password;
  cpassword;
  email;
  message;

  ngOnInit() {
  }

  register(){
    var newUser={
      username:this.username,
      password:this.password,
      cpassword:this.cpassword,
      email:this.email
    };

    this.authService.registerUser(newUser)
      .subscribe(data=>{
        this.message=data;
        this.router.navigateByUrl('/register');
      });
  }

}
