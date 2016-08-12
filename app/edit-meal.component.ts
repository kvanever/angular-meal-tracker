import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <h2>Edit the Selected Meal</h2>
    <div class="form-group">
      <label for="meal-name">Please update the meal name</label>
      <input type="text" class="form-control" [(ngModel)]="meal.name">
    </div>
    <div class="form-group">
      <label for="meal-description">Please update the meal description</label>
      <input type="text" class="form-control" [(ngModel)]="meal.description">
    </div>
    <div class="form-group">
      <label for="meal-calories">Please update the meal calories</label>
      <input type="number" class="form-control" [(ngModel)]="meal.calories">
    </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
