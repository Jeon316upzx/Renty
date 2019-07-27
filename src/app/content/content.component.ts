import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

   public cars: Array<Car>;
  constructor() { }

  ngOnInit() {
    this.cars = [
      new Car("Ford Escape","Toyota","Ford",5,"7 suitcases","Automatic","air conditioning","13 km/hr","Economy","$299","assets/car1.png","New York"),
      new Car("Chevy Aveo","Toyota","Reno",5,"4 suitcases","Automatic"," no air conditioning","24 km/hr","Compact","$24500","assets/car2.png","Anambra"),
      new Car("Corolla","Toyota","Reno",4,"3 suitcases","Automatic","air conditioning","45.8 km/hr","Intermediate","$12000","assets/car3.jpg","Lagos"),
      new Car("Mini cooper","Toyota","Reno",3,"3 suitcases","Automatic","air conditioning","45.8 km/hr","Intermediate","$1200","assets/car1.png","Delta")
    ];
  }

}
