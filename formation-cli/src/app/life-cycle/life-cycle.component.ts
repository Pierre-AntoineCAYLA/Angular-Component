import { Component, OnInit } from '@angular/core';
import Formation from '../formation/Formation';


const NOM_ANGULAR: string = 'Module Angular';
const NOM_JS: string = 'Module JavaScript';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})

export class LifeCycleComponent implements OnInit {
 
formation: Formation = new Formation("Angular", "formation d'Angular");

constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.formation = new Formation(this.formation._nom === "Angular" ? "JS" : "Angular", "il s'agit de JS ou de Angular");
    }, 1000)
  }

}
