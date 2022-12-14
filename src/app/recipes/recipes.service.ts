import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://images.pexels.com/photos/1352274/pexels-photo-1352274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: ['French fries', 'Pork meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://images.pexels.com/photos/4057736/pexels-photo-4057736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ... this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    } as Recipe;
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
