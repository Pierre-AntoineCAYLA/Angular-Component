import { Component, OnInit, Input } from '@angular/core';
import Formation from '../pipe/Formation';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  handleFormationSelected(formation) {
    alert('Formation selected '+ formation._nom);
    }

  formations: Array<Formation> = [];
  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation("java", "module de java",150,new Date("01/04/2018"),new Date("01/07/2018")),
      new Formation("AngularTs", "module d'AngularTS",90,new Date("03/04/2018"),new Date("01/05/2018")),
      new Formation("SQL", "module de SQL",70,new Date("01/07/2018"),new Date("01/09/2018")),
    ]
  }

}
