import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="row">
      <div class="col-md-1">
        <h3>{{ meal.id }}</h3>
      </div>
      <div class="col-md-3">
        <h3>{{ meal.name }}</h3>
      </div>
      <div class="col-md-4">
        <h3>{{ meal.description }}</h3>
      </div>
      <div class="col-md-2">
        <h3>{{ meal.calories }}</h3>
      </div>
      <div class="col-md-1">
        <h3>Edit</h3>
      </div>
      <div class="col-md-1">
        <h3>Delete</h3>
      </div>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
