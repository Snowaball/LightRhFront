import { Component } from '@angular/core';
import * as moment from 'moment';
import { Jour } from './../../../jour';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent {
  mois: moment.Moment;
  semaines: moment.Moment[][] = [];


  constructor() {
    this.mois = moment();
    this.genererSemaines();
  }

  genererSemaines(): void {
    this.semaines = [];
  
    const debutMois = this.mois.clone().startOf('month').startOf('week');
    const finMois = this.mois.clone().endOf('month').endOf('week');
  
    let semaineCourante = [];
    const dateCourante = debutMois.clone();
  
    while (dateCourante.isSameOrBefore(finMois, 'day')) {
      semaineCourante.push(dateCourante.clone());
  
      if (dateCourante.day() === 0 && semaineCourante.length > 0) { // Dimanche
        this.semaines.push(semaineCourante);
        semaineCourante = [];
      }
  
      dateCourante.add(1, 'day');
    }
  
    if (semaineCourante.length > 0) {
      this.semaines.push(semaineCourante);
    }
  }
  
  

  moisPrecedent(): void {
    this.mois.subtract(1, 'month');
    this.genererSemaines();
  }

  moisSuivant(): void {
    this.mois.add(1, 'month');
    this.genererSemaines();
  }
}