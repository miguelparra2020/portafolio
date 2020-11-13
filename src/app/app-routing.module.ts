import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadoCursoTablasExcelComponent } from './componentes/certificado-curso-tablas-excel/certificado-curso-tablas-excel.component';
import { CertificadoTecnicoContabilidadFinanzasComponent } from './componentes/certificado-tecnico-contabilidad-finanzas/certificado-tecnico-contabilidad-finanzas.component';
import { CertificadoTecnologoContabilidadyFinanzasComponent } from './componentes/certificado-tecnologo-contabilidady-finanzas/certificado-tecnologo-contabilidady-finanzas.component';
import { CertificadosCursosContablesComponent } from './componentes/certificados-cursos-contables/certificados-cursos-contables.component';
import { ContadorpageComponent } from './componentes/contadorPage/contadorpage.component'
import { CurriculumPageComponent } from './componentes/curriculum-page/curriculum-page.component';
import { ElectronicoPageComponent } from './componentes/electronico-page/electronico-page.component';
import { HomeComponent } from './componentes/home/home.component';
import { InformaticopageComponent } from './componentes/informaticoPage/informaticopage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'contador', component: ContadorpageComponent },
  { path: 'informatico', component: InformaticopageComponent },
  { path: 'electronico', component: ElectronicoPageComponent },
  { path: 'certificadoTecnologoContabilidadyFinanzas', component: CertificadoTecnologoContabilidadyFinanzasComponent },
  { path: 'certificadoTecnicoContabilidadFinanzas', component: CertificadoTecnicoContabilidadFinanzasComponent },
  { path: 'certificadosCursosContables', component: CertificadosCursosContablesComponent },
  { path: 'certificadoCursoTablasExcel', component: CertificadoCursoTablasExcelComponent },
  { path: 'curriculum', component: CurriculumPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }