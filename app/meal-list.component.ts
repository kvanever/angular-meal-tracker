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
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="#meal of mealList">
        <td>{{ meal.id }}</td>
        <td>{{ meal.name }}</td>
        <td>{{ meal.description }}</td>
        <td>{{ meal.calories }}</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </tbody>
  </table>
  `
})
export class MealListComponent {
  public mealList: Meal[];
}
