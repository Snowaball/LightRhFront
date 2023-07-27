import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationAbsenceComponent } from './components/creation-absence/creation-absence.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'creation_absence', component: CreationAbsenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
