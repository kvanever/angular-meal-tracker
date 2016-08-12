import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  pipes: [CaloriesPipe],
  inputs: ['mealList'],
  template: `
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="#meal of mealList | calories:filterCalories">
        <td>{{ meal.id }}</td>
        <td contenteditable='true'>{{ meal.name }}</td>
        <td contenteditable='true'>{{ meal.description }}</td>
        <td contenteditable='true'>{{ meal.calories }}</td>
      </tr>
    </tbody>
  </table>
  <select (change)="onChange($event.target.value)">
    <option value="meals">Show Meals (500 calories or more)</option>
    <option value="snacks">Show Snacks (less than 500 calories)</option>
    <option value="all" selected="selected">Show All</option>
  </select>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public filterCalories: string;
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
