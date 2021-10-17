export class Recipe {
  constructor(recipes, singleRecipe) {
    this.recipes = recipes;
    this.singleRecipe = singleRecipe;
  }

  format(recipe) {
    const formattedRecipe = {
      recipeId: recipe.recipe_id,
      title: recipe.title,
      servings: recipe.servings,
      readyInMinutes: recipe.ready_in_minutes,
      authorId: recipe.author_id,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions.map(instruction => {
        return {
          stepNumber: instruction.step_number,
          step: instruction.step,
        };
      }),
      image: recipe.image,
    };

    return formattedRecipe;
  }

  get recipes() {
    if (!this.recipes) return null;

    const recipes = this.recipes.map(recipe => {
      return this.format(recipe);
    });

    return recipes;
  }

  get recipe() {
    if (!this.singleRecipe) return null;

    const recipe = this.format(this.singleRecipe);

    return recipe;
  }
}
