import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Observable, of, tap } from 'rxjs';
import { Absence } from 'src/app/models/absence.model';
import { HighlightedDay } from 'src/app/models/highlighted-day';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent {

  absences : Array<Absence> = new Array<Absence>;
  highlightedDays : Map<moment.Moment,string> = new Map<moment.Moment,string>;
  dateClass : MatCalendarCellClassFunction<moment.Moment> = (cellDate, view) => {
    if(view == "month"){
      if(cellDate.day()==0 || cellDate.day()==6)
        return 'cellHighlight-weekend';
       
        
      const possibleHighlightedDay : HighlightedDay= {
        moment : cellDate,
        type : ""
      }
        return 'cellHighlight-conge-perso';
    }
    return 'cellHighlight-basic';
  };

  constructor(private adapter : DateAdapter<any>, private employeeService : EmployeeService){
    this.adapter.setLocale(moment.locale('fr'));
    this.employeeService.getAbsences().pipe(
      tap((absences:Array<Absence>)=> {
        this.absences = absences;
        this.highlightedDays = this.daysToHiglight(absences);
      })
    ).subscribe();
  }

  private daysToHiglight(absences : Array<Absence>):Map<moment.Moment,string>{
    let highlightedDays = new Map<moment.Moment,string>();
    console.log(absences);
    absences.forEach(absence => {
      /*if(absence.Stat)*/
      let dateStart = moment(absence.dateStart);
      let dateEnd = moment(absence.dateEnd);
      let int = dateStart.diff(dateEnd, 'days', true)+1
      console.log(int);
    });


    return new Map<moment.Moment,string>;
  }
}
