import { Component, OnInit } from '@angular/core';
import Formation from './Formation';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  asyncPromise: any = new Promise(resolve => {
    setTimeout(() => resolve('Async data'), 1500);
    });

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
        new Formation("java", "module de java",150,new Date("01/04/2018"),new Date("01/07/2018")),
        new Formation("AngularTs", "module d'AngularTS",90,new Date("03/04/2018"),new Date("01/05/2018")),
        new Formation("SQL", "module de SQL",70,new Date("01/07/2018"),new Date("01/09/2018")),
      ]
    }
  }