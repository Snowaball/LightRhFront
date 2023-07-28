import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationAbsenceComponent } from './components/creation-absence/creation-absence.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { isAuthGuard } from './services/guards/is-auth.guard';

const routes: Routes = [
  //routes relatives au login
  { path: '', component: ConnexionComponent },
  { path : 'password_reset', component : PasswordResetComponent },
  
  //route d'accueil quand connecté 
  { path : 'calendar', component : CalendrierComponent, canActivate : [isAuthGuard] },
  //manque la visualisation des jours si congé / rtt / rtt employeur / jour férié avec couleur diff entre demande perso et congé imposé
  //manque l'affichage des compteurs congés payés + rtt
  //manque changer d'année 


  //Routes pour la gestion de soi même
  { path : 'absences_view', component : CalendrierComponent, canActivate : [isAuthGuard] },
  // --liste par ordre chrono jours de congés + rtt employeur + jours fériés + 
  //manque modifier une demande 
  //manque supprimer une demande

  { path: 'creation_absence', component: CreationAbsenceComponent, canActivate : [isAuthGuard] },
  
  //Routes pour les managers
  //Manque visualisation de mon département en vue par jour
  //Manque histogramme de mon département en vue par jour


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
