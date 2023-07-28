import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
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
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackgroundComponent } from './shared/background/background/background.component';
import { TitleBarComponent } from './shared/title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CalendrierComponent,
    ConnexionComponent,
    PremiereConnexionComponent,
    CreationAbsenceComponent,
    ValiderAbsenceComponent,
    ModifierAbsenceComponent,
    HistogrammeComponent,
    CreationCompteComponent,
    BackgroundComponent,
    TitleBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
