import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [1, 3, 5, 7];

  cardss: Card[] = [{
    text: 'text1',
    title: 'title1'
  },
  {
    text: 'text2',
    title: 'title2'
  },
  {
    text: 'text3',
    title: 'title3'
  }]
  togle = true
  togleCards() {
    this.togle = !this.togle
  }
}
