import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CakesService } from '../services/cakes.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login:any
  sum=0
  constructor(private router:Router,public cakeservice:CakesService) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('user');
    this.sum= this.cakeservice.getsum()
  }

  gotosucres(){
    this.router.navigate(["/sucres"])
  }
  gotosales(){
    this.router.navigate(["/sales"])
  }

  dconnecter(){
    localStorage.removeItem('user');
    window.location.reload();
  }
}
