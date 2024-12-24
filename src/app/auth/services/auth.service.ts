import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estConnect=false;


  constructor(private router:Router) { }

  login(login : string,mdp:string){

    if(login=='admin' && mdp=='admin'){
      this.router.navigate(['/admin']);
      this.estConnect=true;

    }
    else {
 
        if(login == 'client' && mdp=='client'){
          this.router.navigate(['/home']);
          localStorage.setItem('user', login);

        }else{
          alert('login ou mdp est incorrect')
    
        }
    
    }
  }

  deconnexion(){
    localStorage.removeItem('user');
    this.estConnect=false;
    this.router.navigate(['/login']);
  }


}
