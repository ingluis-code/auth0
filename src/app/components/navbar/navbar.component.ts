import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

//Importar para hacer uso de Auth0
import { AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
 
  user: any;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe( perfil => {
      console.log(perfil);
      this.user = perfil;
    });
  }

  login(){
    this.auth.loginWithRedirect();
  }

  logout(){
    this.auth.logout({ returnTo: document.location.origin })
  }

}
