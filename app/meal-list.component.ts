import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Calories</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="#meal of mealList">
        <td>{{ meal.id }}</td>
        <td contenteditable='true'>{{ meal.name }}</td>
        <td contenteditable='true'>{{ meal.description }}</td>
        <td contenteditable='true'>{{ meal.calories }}</td>
        <td>Delete</td>
      </tr>
    </tbody>
  </table>
  `
})
export class MealListComponent {
  public mealList: Meal[];
}
