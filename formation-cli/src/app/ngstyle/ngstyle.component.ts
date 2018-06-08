import { Component, OnInit } from '@angular/core';
import Formation from '../formation/Formation';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  formations: Array<Formation> = [];

  getColorByElement(isFirst: boolean = false, isLast: boolean = false) {
    if (isFirst) {
      return 'red'
    }
    else if (isLast) {
      return 'green'
    }
    else return 'black'
  }


  getBackGroundColorByElement(isEven: boolean = false) {
    if (isEven) {
      return 'grey'
    }
  }
  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation("java", "module de java"),
      new Formation("AngularTs", "module d'AngularTS"),
      new Formation("SQL", "module de SQL"),
    ]
  }

}