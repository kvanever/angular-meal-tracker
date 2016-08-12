import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';
import { EditMealComponent } from './edit-meal.component';
import { AddNewMealComponent } from './add-new-meal.component';

@Component({
  selector: 'meal-list',
  pipes: [CaloriesPipe],
  inputs: ['mealList'],
  directives: [EditMealComponent, AddNewMealComponent],
  template: `
  <div class="row">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="#meal of mealList | calories:filterCalories" (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal">
          <td>{{ meal.name }}</td>
          <td>{{ meal.description }}</td>
          <td>{{ meal.calories }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="row">
    <label>Filter by Calories</label>
    <select (change)="onChange($event.target.value)">
      <option value="meals">Show Meals (500 calories or more)</option>
      <option value="snacks">Show Snacks (less than 500 calories)</option>
      <option value="all" selected="selected">Show All</option>
    </select>
  </div>
  <div class="row">
    <div class="col-md-6">
      <add-new-meal (onAddNewMeal)="createMeal($event)"></add-new-meal>
    </div>
    <div class="col-md-6">
      <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    </div>
  </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public filterCalories: string;
  public selectedMeal: Meal;
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
  createMeal(mealArray: string[]): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], parseInt(mealArray[2]))
    );
  }
}
