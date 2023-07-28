import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetfinal';

  currentComponent : string = ""
  constructor(private router : Router){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          this.currentComponent = this.getComponentTitle((<NavigationEnd>event).url);
      }
    });
  }

  getComponentTitle(url : string) : string{
    switch(url){
      case("/calendar") : return "Calendrier";
      default : return "Connexion";
    }
  }
}
