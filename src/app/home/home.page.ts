import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  info: string = '...';
  nguess: number = 0;
  secretnumber: number = Math.round(Math.random() * 101); // Random number between 0 - 100

  constructor() {}

  guessNumber(num: number) {
    if (this.nguess == this.secretnumber) {
      this.info = 'CORRECT, good guess!!!';
    }else if(this.nguess > this.secretnumber){
      this.info = 'lower than this number, keep trying.'
    }else if(this.nguess < this.secretnumber){
      this.info = 'higher than this number, keep trying.'
    }else{
      this.info = 'ERROR.'
    }
  }
}
