import { Component, OnInit } from '@angular/core';
import { CakesService } from 'src/app/services/cakes.service';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lister-cake',
  templateUrl: './lister-cake.component.html',
  styleUrls: ['./lister-cake.component.css']
})
export class ListerCakeComponent implements OnInit {
  tabCake: BiblioCakes[] =[];
  constructor(private cakeService : CakesService,private router:Router) { }

  ngOnInit(): void {
    this.tabCake=this.cakeService.getCakes();
  }
  gotoadmin(){
    this.router.navigate(["/admin"])
  }
  delete(i:number){
    this.cakeService.delete(i);
  }
}
