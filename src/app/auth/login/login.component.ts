import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servauth : AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  loginn(login :string,mdp:string){
    this.servauth.login(login,mdp);


  }
  

}
