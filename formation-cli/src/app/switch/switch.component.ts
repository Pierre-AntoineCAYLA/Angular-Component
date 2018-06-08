import { Component, OnInit } from '@angular/core';
import Formation from '../formation/Formation';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  formations: Array<Formation> = [];

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation("java", "module de java"),
      new Formation("AngularTs", "module d'AngularTS")]
  }

}
