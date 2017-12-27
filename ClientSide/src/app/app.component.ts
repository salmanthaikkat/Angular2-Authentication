import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router:Router){

  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }

  goToRegister(){
    this.router.navigateByUrl('/register');
  }

}
