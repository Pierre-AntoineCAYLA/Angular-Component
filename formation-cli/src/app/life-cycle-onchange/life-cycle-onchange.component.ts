import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import Formation from '../formation/Formation';

@Component({
  selector: 'app-life-cycle-onchange',
  templateUrl: './life-cycle-onchange.component.html',
  styleUrls: ['./life-cycle-onchange.component.css']
})

export class LifeCycleOnchangeComponent implements OnInit {

  @Input()
  formation: Formation;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    const f = change['formation'];
    if (f.previousValue) {
      console.log(`Previous : ${f.previousValue.nom}`);
    }
    console.log(`Current : ${f.currentValue.nom}`);
  }
}