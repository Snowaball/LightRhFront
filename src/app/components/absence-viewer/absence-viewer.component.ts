import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Absence } from 'src/app/models/absence.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-absence-viewer',
  templateUrl: './absence-viewer.component.html',
  styleUrls: ['./absence-viewer.component.scss']
})
export class AbsenceViewerComponent {
  absences? : Array<Absence>;

  constructor(private employeeService : EmployeeService){
    employeeService.getAbsences().pipe(
      tap((absences : Array<Absence>)=> {
        if(absences) {
          this.absences = absences
        }
      })
    ).subscribe();
  }

  getAbsenceTypeString(absenceType : string){
    switch(absenceType){
      case("EMPLOYER_RTT") : return "RTT choisie par l'employeur";
      case("EMPLOYEE_RTT") : return "RTT choisie par l'employé";
      case("HOLIDAY") : return "Jour férié";
      case("PAID_LEAVE") : return "Congés payés";
      case("UNPAIN_LEAVE") : return "Absence non rémunérée";
      default : return "Type inconnu";
    }
  }

  getAbsenceStatusString(absenceStatut : string){
    switch(absenceStatut){
      case("EN_ATTENTE_VALIDATION") : return "Demande en attente de validation";
      case("INITIALE") : return "Demande déposée";
      case("REJETEE") : return "Demande refusée";
      case("VALIDEE") : return "Demande validée";
      default : return "Statut inconnu";
    }  
  }
}
