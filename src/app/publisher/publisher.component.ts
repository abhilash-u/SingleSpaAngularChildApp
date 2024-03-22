import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable';
const observable = new Observable('konoha');

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss'],
})
export class PublisherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  handleClick(): void {
    console.log('Button clicked!');
    observable.publish('Message Published from Angular Publisher Component!');
  }
}
