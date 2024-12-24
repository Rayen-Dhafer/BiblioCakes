import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.css']
})
export class Client1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotohome(){
    this.router.navigate(["/home"])
  }
}
