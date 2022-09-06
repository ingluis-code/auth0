import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';

//Importar para hacer uso de Auth0
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtectedComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,

    AuthModule.forRoot({
      domain: 'dev--ld3sy9n.us.auth0.com',
      clientId: 'Dy0sbozAhp9oeZ4Y9AzejtWlsEOJcFWb'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
