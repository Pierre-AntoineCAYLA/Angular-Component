import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  isHidden:boolean= true;
  handleClick() {
    this.isHidden=! this.isHidden;
    }

  mouseOut():void{
    console.log("vous n etes plus sur le texte");
  }

  mouseOver():void{
    console.log("vous etes sur le texte");
  }

  constructor() { }

  ngOnInit() {
  }

}
