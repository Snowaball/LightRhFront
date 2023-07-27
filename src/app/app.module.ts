import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PremiereConnexionComponent } from './components/premiere-connexion/premiere-connexion.component';
import { CreationAbsenceComponent } from './components/creation-absence/creation-absence.component';
import { ValiderAbsenceComponent } from './components/valider-absence/valider-absence.component';
import { ModifierAbsenceComponent } from './components/modifier-absence/modifier-absence.component';
import { HistogrammeComponent } from './components/histogramme/histogramme.component';
import { FormsModule } from '@angular/forms';
import { CreationCompteComponent } from './components/creation-compte/creation-compte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AbsenceService } from './services/absence.service';
@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    ConnexionComponent,
    PremiereConnexionComponent,
    CreationAbsenceComponent,
    ValiderAbsenceComponent,
    ModifierAbsenceComponent,
    HistogrammeComponent,
    CreationCompteComponent,
    HeaderComponent,   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AbsenceService,
  ],
  bootstrap : [AppComponent]
})
export class AppModule { }
