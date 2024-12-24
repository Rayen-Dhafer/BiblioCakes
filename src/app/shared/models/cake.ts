export class BiblioCakes {
    id: number;
    name : string;
    description : string;
    img:string;
    prix:number;
    choix:string;
    descVisible? : boolean;
    deleted? : boolean;

    constructor(args: BiblioCakes = {id:0,name:"",description:"",img:"",prix:0,choix:""}){
      this.id=args.id;
      this.name=args.name;
      this.description = args.description;
      this.img=args.img;
      this.prix=args.prix;
      this.choix=args.choix;
      this.descVisible = args.descVisible;
      this.deleted = args.deleted;
    }
    }