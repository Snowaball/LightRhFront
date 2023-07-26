import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreationAbsenceComponent } from './creation-absence/creation-absence.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'creation_absence', component: CreationAbsenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
