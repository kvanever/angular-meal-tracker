import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <meal-list [mealList]="meals"></meal-list>
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
