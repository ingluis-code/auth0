import { Component,OnInit } from '@angular/core';

//Importar para hacer uso de Auth0
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: [
  ]
})
export class ProtectedComponent implements OnInit {

  //IMPORTANTE: auth tiene que se public para poder usarlo en el html 
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe( perfil => {
      console.log(perfil);
    });
    
    
  }
  /*****FUNCIONES****/
  //this.auth.loginWithRedirect()
  //this.auth.logout()


  /*****PROPIEDADES****/
  //this.auth.isLoading$
  //this.auth.isAuthenticated$
  //this.auth.user$
  //this.auth.error$
  //this.auth.appState$


   /*****Auth0 tiene GUARD solo es exportar esto en ngModule y lo demas se hace igual****/ 
  //import { AuthGuard } from '@auth0/auth0-angular';

  

}
