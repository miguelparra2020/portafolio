import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CategoriasImagenesComponent } from './componentes/categorias-imagenes/categorias-imagenes.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    CategoriasComponent,
    HeaderComponent,
    CategoriasImagenesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
