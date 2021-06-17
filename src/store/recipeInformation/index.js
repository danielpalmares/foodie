import { apiGetRecipeInformation } from '../../services/spoonacular/api';

export async function recipeInformationAction(id) {
  try {
    const response = await apiGetRecipeInformation.get(`${id}/information`);
    const { data, status, statusText } = response;
    console.log(data);

    if (status !== 200) throw new Error(statusText);

    const recipe = Array({ ...data });

    const recipeInformation = recipe.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        cookingTime: recipe.readyInMinutes,
        likes: recipe.aggregateLikes,

        dairyFree: recipe.dairyFree,
        glutenFree: recipe.glutenFree,
        veryHealthy: recipe.veryHealthy,
        veryPopular: recipe.veryPopular,
        sustainable: recipe.sustainable,

        ingredients: [...recipe.extendedIngredients].map(ingredient => {
          return {
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit,
          };
        }),
        servings: recipe.servings,

        instructions: Array({ ...recipe.analyzedInstructions[0] }).map(
          instruction => {
            return [
              ...[...instruction.steps].map(step => {
                return {
                  number: step.number,
                  step: step.step,
                };
              }),
            ];
          }
        ),
      };
    });

    console.log(recipeInformation);
  } catch (err) {}
}
