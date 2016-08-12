import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-new-meal',
  outputs: ['onAddNewMeal'],
  template: `
    <div class="row">
      <form (submit)="addMeal(newName, newDescription, newCalories)">
        <div class="form-group">
          <label for="meal-name">Please enter a meal name</label>
          <input type="text" class="form-control" placeholder="i.e breakfast, lunch, dinner, snack" #newName>
        </div>
        <div class="form-group">
          <label for="meal-description">Please enter a meal description</label>
          <input type="text" class="form-control" placeholder="i.e sandwich, candy bar, pizza" #newDescription>
        </div>
        <div class="form-group">
          <label for="meal-calories">Please enter the meal's calories</label>
          <input type="number" class="form-control" placeholder="100" #newCalories>
        </div>
        <button type="submit" class="btn btn-primary">Add a meal</button>
      </form>
    </div>
  `
})
export class AddNewMealComponent {
  public onAddNewMeal: EventEmitter<string[]>;
    constructor(){
      this.onAddNewMeal = new EventEmitter();
    }
  addMeal(mealName: HTMLInputElement, mealDescription: HTMLInputElement, mealCalories: HTMLInputElement){
    this.onAddNewMeal.emit([mealName.value, mealDescription.value, mealCalories.value])
    mealName.value = '';
    mealDescription.value = '';
    mealCalories.value = '';
  }
}
