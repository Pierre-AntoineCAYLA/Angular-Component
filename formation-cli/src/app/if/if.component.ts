import { Component, OnInit } from '@angular/core';
import Formation  from '../formation/Formation';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {


  formation:Formation=new Formation("java","apprend a dev en java")
  isDisplay: boolean = true;

  constructor() { }

  handleClick() {
    this.isDisplay=! this.isDisplay;
    }
  ngOnInit() {
     }
}
