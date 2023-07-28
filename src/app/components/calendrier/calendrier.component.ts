import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent {
  mois: moment.Moment;
  semaines: moment.Moment[][] = [];
  joursSemaineLabels: string[] = [];
  years: number[] = [];
  selectedYear: number;
  


  constructor() {
    this.mois = moment();
    this.joursSemaineLabels = this.getJoursSemaineLabels();
    this.genererCalendrier();
    this.years = this.generateYearsList();
    this.selectedYear = this.mois.year();
  }
  
  

  


  getJoursSemaineLabels(): string[] {

    const ordreJoursSemaine = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const joursLabels = moment.weekdaysMin();
    const premierJourSemaineIndex = moment().startOf('week').day();
    const joursAvantPremierJourSemaine = joursLabels.splice(0, premierJourSemaineIndex);
    return ordreJoursSemaine;
  }

  generateYearsList(): number[] {
    const currentYear = moment().year();
    return Array.from({length: 11}, (_, i) => currentYear - 5 + i);
}


onChangeYear(newYear: number): void {
  this.mois.set('year', newYear);
  this.genererCalendrier();
}



  genererCalendrier(): void {
    this.semaines = [];
  
    const premierJourMois = this.mois.clone().startOf('month');
    const dernierJourMois = this.mois.clone().endOf('month');

    let semaineCourante = [];
    let dateCourante = premierJourMois.clone().startOf('week').add(1, 'day'); // Commencer par le lundi
  
    while (dateCourante.isBefore(dernierJourMois, 'day') || dateCourante.isSame(dernierJourMois, 'day')) {
      semaineCourante.push(dateCourante.clone());
  
      if (dateCourante.day() === 0) { // Dimanche
        this.semaines.push(semaineCourante);
        semaineCourante = [];
      }
  
      dateCourante.add(1, 'day');
    }

    // Ajouter la dernière semaine
    if (semaineCourante.length > 0) {
      this.semaines.push(semaineCourante);
    }
  }

  moisPrecedent(): void {
    this.mois.subtract(1, 'month');
    this.joursSemaineLabels = this.getJoursSemaineLabels();
    this.genererCalendrier();
  }

  moisSuivant(): void {
    this.mois.add(1, 'month');
    this.joursSemaineLabels = this.getJoursSemaineLabels();
    this.genererCalendrier();
  }
}
