import { Component, OnInit } from '@angular/core';
import { CakesService } from 'src/app/services/cakes.service';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { Panier } from 'src/app/shared/models/panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  tabPanier: any; // Initialize as an empty array
  total=0
  constructor(public serv : CakesService,) { }
  

  ngOnInit(): void {

    this.getAll()
     this.total = this.serv.totalpanier();   
  }


  suppPanier(f:BiblioCakes){
    this.serv.suppPanier(f)
    this.getAll()

    this.total=this.serv.totalpanier();
  }
  
  getAll(){
    const storedData = localStorage.getItem('tabpanier');
    const tabpanierIds: number[] = storedData ? JSON.parse(storedData) : []; // An array of cake IDs
  
    this.serv.sum=tabpanierIds.length
     this.tabPanier = tabpanierIds.map(id => {
       return this.serv.getCakeParId(id);   
    });
  }
}
