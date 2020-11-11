import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'curriculum', component: CurriculumPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }