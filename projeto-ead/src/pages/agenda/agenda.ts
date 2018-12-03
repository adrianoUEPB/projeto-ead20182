import { Component } from '@angular/core';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  currentEvents: any[] = []

  constructor(
    
  ) {
    this.currentEvents =  [
      {
       year: 2018,
       month: 12,
       date: 25,
       description: 'description',
      }
    ]
  }

}
