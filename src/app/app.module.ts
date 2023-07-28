import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CreationAbsenceComponent } from './components/creation-absence/creation-absence.component';
import { ValiderAbsenceComponent } from './components/valider-absence/valider-absence.component';
import { ModifierAbsenceComponent } from './components/modifier-absence/modifier-absence.component';
import { HistogrammeComponent } from './components/histogramme/histogramme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationCompteComponent } from './components/creation-compte/creation-compte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AbsenceService } from './services/absence.service';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import {MatMenuModule} from '@angular/material/menu';
import {Injectable } from '@angular/core';
import { ErrorHttpInterceptor } from './shared/interceptors/error-http-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    ConnexionComponent,
    CreationAbsenceComponent,
    ValiderAbsenceComponent,
    ModifierAbsenceComponent,
    HistogrammeComponent,
    CreationCompteComponent,
    HeaderComponent,
    PasswordResetComponent,   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [
    AbsenceService,
    { provide : HTTP_INTERCEPTORS, useClass : ErrorHttpInterceptor, multi : true}
  ],
  bootstrap : [AppComponent]
})
export class AppModule { }
