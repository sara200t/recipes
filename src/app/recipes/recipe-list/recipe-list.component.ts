import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Array of recipe
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/images/59117.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/images/59117.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
