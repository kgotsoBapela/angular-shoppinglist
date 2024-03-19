import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A test recipe", "This a simple test recipe", "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/ef/db/64/efdb6476-58e7-c308-ef12-8ca02b8639c6/source/512x512bb.jpg")
  ];
}
