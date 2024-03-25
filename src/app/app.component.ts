import { Component } from '@angular/core';

declare global {
  interface Window {
    Android: any;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'left-sidebar';
  constructor() {}

  requestBarcodePermission() {
    console.log('Requesting barcode permission');
    window.Android.requestBarcodePermission();
  }
  requestCameraPermission() {
    window.Android.requestCameraPermission();
  }
  requestLocationPermission() {
    window.Android.requestLocationPermission();
  }
}
