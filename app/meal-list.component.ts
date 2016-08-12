import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent],
  template: `
    <div class="row">
      <div class="col-md-1">
        <h2>ID</h2>
      </div>
      <div class="col-md-3">
        <h2>Name</h2>
      </div>
      <div class="col-md-4">
        <h2>Description</h2>
      </div>
      <div class="col-md-2">
        <h2>Calories</h2>
      </div>
      <div class="col-md-1">
        <h2>Edit</h2>
      </div>
      <div class="col-md-1">
        <h2>Delete</h2>
      </div>
    </div>
    <meal-display *ngFor="#currentMeal of mealList" [meal]="currentMeal"></meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];
}
