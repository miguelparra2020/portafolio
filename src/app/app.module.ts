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
import { FacebookModule } from "ngx-facebook";
import { CertificadoTecnicoContabilidadFinanzasComponent } from './componentes/certificado-tecnico-contabilidad-finanzas/certificado-tecnico-contabilidad-finanzas.component';
import { CertificadosCursosContablesComponent } from './componentes/certificados-cursos-contables/certificados-cursos-contables.component';
import { CertificadoCursoTablasExcelComponent } from './componentes/certificado-curso-tablas-excel/certificado-curso-tablas-excel.component';
import { CertificadoCursoExcelBasicoComponent } from './componentes/certificado-curso-excel-basico/certificado-curso-excel-basico.component';
import { CertificadoCursoHerramientasOfficeComponent } from './componentes/certificado-curso-herramientas-office/certificado-curso-herramientas-office.component';
import { CertificadoCursoNormasOrtograficasEmpresarialesComponent } from './componentes/certificado-curso-normas-ortograficas-empresariales/certificado-curso-normas-ortograficas-empresariales.component';
import { CertificadoOrtografiEmpresarialComponent } from './componentes/certificado-ortografi-empresarial/certificado-ortografi-empresarial.component';
import { CertificadoCursoRedaccionyOrtografiaComponent } from './componentes/certificado-curso-redacciony-ortografia/certificado-curso-redacciony-ortografia.component';
import { CertificadoCursoFundamentosMatematicasComponent } from './componentes/certificado-curso-fundamentos-matematicas/certificado-curso-fundamentos-matematicas.component';
import { CertificadoCursoBolsaDeValoresComponent } from './componentes/certificado-curso-bolsa-de-valores/certificado-curso-bolsa-de-valores.component';

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
    CertificadoTecnologoContabilidadyFinanzasComponent,
    CertificadoTecnicoContabilidadFinanzasComponent,
    CertificadosCursosContablesComponent,
    CertificadoCursoTablasExcelComponent,
    CertificadoCursoExcelBasicoComponent,
    CertificadoCursoHerramientasOfficeComponent,
    CertificadoCursoNormasOrtograficasEmpresarialesComponent,
    CertificadoOrtografiEmpresarialComponent,
    CertificadoCursoRedaccionyOrtografiaComponent,
    CertificadoCursoFundamentosMatematicasComponent,
    CertificadoCursoBolsaDeValoresComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FacebookModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
