import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AuthService]
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  username;
  email;

  ngOnInit() {
    var tokken=localStorage.getItem('token');
    if(!tokken){
      this.router.navigateByUrl('/login');
      alert("Please login");
    }
    else{
      this.authService.getUser(tokken)
        .subscribe(data=>{
          this.username=data.username;
          this.email=data.email;
        });
    }
  }

  signOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
