import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  info: string = '...';
  secretnumber:number = Math.random() * 101; // Random number between 0 - 100

  constructor() {}

}
