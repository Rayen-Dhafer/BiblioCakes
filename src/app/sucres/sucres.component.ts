import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CAKES } from 'src/app/shared/models/tab';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { CakesService } from '../services/cakes.service';
@Component({
  selector: 'app-sucres',
  templateUrl: './sucres.component.html',
  styleUrls: ['./sucres.component.css']
})
export class SucresComponent implements OnInit {
  tabCake: BiblioCakes[] = CAKES;
  login:any
  constructor(private router:Router, public cakeservice:CakesService) { }

  ngOnInit(): void {
    this.tabCake=this.cakeservice.getCakes();
    this.login = localStorage.getItem('user');

  }
  gotohome(){
    this.router.navigate(["/home"])
  }
  gotosales(){
    this.router.navigate(["/sales"])
  }
  ajoutPanier(b:BiblioCakes){
    this.cakeservice.ajoutePanier(b)  }
    dconnecter(){
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
}
