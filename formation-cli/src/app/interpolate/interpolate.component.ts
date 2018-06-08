import { Component, OnInit } from '@angular/core';
import Formation  from '../formation/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom: string = 'jacke'
  nom: string = 'sulivan'

  formation:Formation=new Formation("java","apprend a dev en java")
  formationJS:Formation;

  getTitle(): string {
    return ` ${this.nom} ${this.prenom} `
  }
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
    this.formationJS= new Formation("Module JavaScript","yeah");
    }, 3000)}

}
