import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client2',
  templateUrl: './client2.component.html',
  styleUrls: ['./client2.component.css']
})
export class Client2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotohome(){
    this.router.navigate(["/home"])
  }
}
