import { Component, OnInit } from '@angular/core';
import { CakesService } from 'src/app/services/cakes.service';
import { BiblioCakes } from 'src/app/shared/models/cake';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  tabCake: BiblioCakes[] =[];
  id=0;
  nom="";
  desc="";
  prix=0;
  constructor(private cakeService : CakesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.nom=this.cakeService.getCakeParId(+id).name;
    this.desc=this.cakeService.getCakeParId(+id).description;
    this.prix=this.cakeService.getCakeParId(+id).prix;
  }
 

  soumettre(id:number,name:string,description:string,prix:string){
    let prixf=parseInt(prix)
    this.cakeService.modifierCake(this.id,name,description,prixf);
  }
  
}
