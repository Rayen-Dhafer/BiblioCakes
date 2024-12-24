import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private authserv:AuthService) { }

  ngOnInit(): void {
  }
  dconnecter(){
    this.authserv.estConnect=false
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

}
