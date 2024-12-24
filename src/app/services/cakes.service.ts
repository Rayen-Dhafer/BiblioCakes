import { Injectable } from '@angular/core';
import { CAKES } from 'src/app/shared/models/tab';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { Panier } from '../shared/models/panier';
@Injectable({
  providedIn: 'root'
})
export class CakesService {
  tabCake: BiblioCakes[] = CAKES;
  tabpanier: any[] = [];  
  total=0;
  sum=0

  constructor() { }

  ngOnInit(): void {
   
    }


  getCakeParId(id:number):BiblioCakes {
    var l=this.tabCake.length;
    var i;
    var k=0;
    for(i=0;i<l;i++){
      if(this.tabCake[i].id==id){
        k=i;
      }
    }
    return this.tabCake[k];
  }
  getCakes() : BiblioCakes[]
  {
    const storedData = localStorage.getItem('tabpanier');
    this.tabpanier = storedData ? JSON.parse(storedData) : [];
   
    this.sum=this.tabpanier.length
    return this.tabCake;
  }
  ajouterCake(name:string,description:string,choix:string,image:string,prix:number){
    var l=this.tabCake.length;
    let c=new BiblioCakes();
    c.id=this.tabCake[l-1].id+1;
    c.name=name;
    c.description=description;
    c.descVisible=true;
    c.deleted=false;
    c.choix=choix;
    c.img=image;
    c.prix=prix;
    this.tabCake.push(c);
    alert("done");
  
  }
  delete(k:number){
    this.tabCake.splice(k,1);
    alert("done")
  }
  
  ajoutePanier(b: BiblioCakes): void {
     let storedData = localStorage.getItem('tabpanier');
    let tabpanier = storedData ? JSON.parse(storedData) : [];
  
     tabpanier.push(b.id);
  
     localStorage.setItem('tabpanier', JSON.stringify(tabpanier));
    this.sum= tabpanier.length
    }
  
  

  suppPanier(f: BiblioCakes): void {
     let storedData = localStorage.getItem('tabpanier');
    let tabpanier: number[] = storedData ? JSON.parse(storedData) : [];  
    
     const index = tabpanier.indexOf(f.id); // Match by ID
  
     if (index !== -1) {
      tabpanier.splice(index, 1);  
      
       localStorage.setItem('tabpanier', JSON.stringify(tabpanier));
      
    } 

    this.sum= tabpanier.length
  }
  
  
  
 
  public totalpanier(): number {
     const tabPanierIds = JSON.parse(localStorage.getItem('tabpanier') || '[]');
    
     let total = 0;
    for (let i = 0; i < tabPanierIds.length; i++) {
       const cake = this.getCakeParId(tabPanierIds[i]);  
      total += cake.prix;  
    }
    this.sum= tabPanierIds.length
    return total;  
  }
  
  public getsum(): number {
    const tabPanierIds = JSON.parse(localStorage.getItem('tabpanier') || '[]');
    this.sum= tabPanierIds.length

    return  this.sum;
  }
  

  modifierCake(id:number,name:string,description:string,prix:number){
    this.getCakeParId(id).name=name;
    this.getCakeParId(id).description=description;
    this.getCakeParId(id).prix=prix;
  }
}
