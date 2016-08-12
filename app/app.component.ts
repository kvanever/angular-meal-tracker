import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';
import { AddNewMealComponent } from './add-new-meal.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent, AddNewMealComponent],
  template: `
    <meal-list [mealList]="meals"></meal-list>
    <add-new-meal (onAddNewMeal)="createMeal($event)"></add-new-meal>
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
  createMeal(name: string, description: string, calories: string): void {
    var intCalories = parseInt(calories)
    this.meals.push(
      new Meal(name, description, intCalories, this.meals.length)
    );
  }
}
