import {Component, Input, OnInit} from "@angular/core";
import { Card } from "../app.component";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation: ['[[',']]']
})
export class CardComponent implements OnInit {

  @Input() card!: Card
  @Input() index!: number

  cardDate: Date = new Date()

  title: string = 'Card Component!'
  text: string = 'My sample text'
  number: number = 42
  textColor =''
  array: number[] = [1, 1, 2, 3, 5, 8, 13]

  obj = {name: 'Dmitri', age: 28}

  imgUrl: string = 'https://freepngclipart.com/download/panda/31578-alf-img-showing-panda-head-hd-photo.jpg'
  imgUrLBadPanda = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9jaZrnE3AxYvEPP7iapStcZmrlhYc9yRXw&usqp=CAU'

  disabled = false

  

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = this.imgUrLBadPanda
      this.disabled = true
    }, 3000)
  }

  getHelloWord(): string {
    return 'Hello word'
  }

  getInfo() {
    console.log('this is my info')
  }

  changeTitle() {
    this.card.title = 'Title has be cahnge'
  }
  inputHandler(value:string) {
this.card.title = value
  }

  changeHandler(){

  }

}
