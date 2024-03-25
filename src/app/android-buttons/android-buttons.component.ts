import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-android-buttons',
  templateUrl: './android-buttons.component.html',
  styleUrls: ['./android-buttons.component.scss'],
})
export class AndroidButtonsComponent implements OnInit {
  @Input() label: string = 'Button'; // Default label
  @Input() onClick?: () => void; // Function to be called on click
  @Input() disabled?: boolean = false; // Optional disabled state
  @Input() type?: 'button' | 'submit' | 'reset'; // Optional button type (defaults to 'button')

  constructor() {}

  ngOnInit(): void {}
}
