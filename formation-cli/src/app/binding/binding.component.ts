import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  textColor:string= "red";

  constructor() { }

  ngOnInit() {
    setInterval(() =>{
      if(this.textColor=="red"){
        this.textColor="green"
      }
      else{this.textColor="red"}
    }, 1000)}

}
