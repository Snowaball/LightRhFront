import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PremiereConnexionComponent } from './premiere-connexion/premiere-connexion.component';
import { CreationAbsenceComponent } from './creation-absence/creation-absence.component';
import { ValiderAbsenceComponent } from './valider-absence/valider-absence.component';
import { ModifierAbsenceComponent } from './modifier-absence/modifier-absence.component';
import { HistogrammeComponent } from './histogramme/histogramme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';
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
  ],
  bootstrap : [AppComponent]
})
export class AppModule { }
