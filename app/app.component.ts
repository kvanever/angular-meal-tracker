import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <h1>Meal Tracker!</h1>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Breakfast", "Eggs and toast", 550, 0),
      new Meal("Lunch", "Sandwich", 200, 1),
      new Meal("Dinner", "Pasta", 700, 2)
    ];
  }
}
