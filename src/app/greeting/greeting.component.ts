import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable';
const observable = new Observable('konoha');

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Hello World');
    observable.subscribe((ninja) => {
      console.log(ninja);
    });
  }
}
