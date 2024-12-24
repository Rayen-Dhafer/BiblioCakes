import { Component, OnInit } from '@angular/core';
import { CakesService } from 'src/app/services/cakes.service';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-cake',
  templateUrl: './ajouter-cake.component.html',
  styleUrls: ['./ajouter-cake.component.css']
})
export class AjouterCakeComponent implements OnInit {
  tabCake: BiblioCakes[] =[];
  constructor(private cakeService : CakesService,private router:Router) { }

  ngOnInit(): void {
  }
  gotoadmin(){
    this.router.navigate(["/admin"])
  }
  ajouterCake(name:string,description:string,choix:string,image:string,prix:string){
    let prixf=parseInt(prix)
    this.cakeService.ajouterCake(name,description,choix,image,prixf);
  
  }
}
