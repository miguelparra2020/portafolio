import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { ContadorpageComponent } from './componentes/contadorPage/contadorpage.component';
import { InformaticopageComponent } from './componentes/informaticoPage/informaticopage.component';
import { ElectronicoPageComponent } from './componentes/electronico-page/electronico-page.component';
import { CurriculumPageComponent } from './componentes/curriculum-page/curriculum-page.component';
import { FundacionPageComponent } from './componentes/fundacion-page/fundacion-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { CertificadoTecnologoContabilidadyFinanzasComponent } from './componentes/certificado-tecnologo-contabilidady-finanzas/certificado-tecnologo-contabilidady-finanzas.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    ContadorpageComponent,
    InformaticopageComponent,
    ElectronicoPageComponent,
    CurriculumPageComponent,
    FundacionPageComponent,
    HomeComponent,
    CertificadoTecnologoContabilidadyFinanzasComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
