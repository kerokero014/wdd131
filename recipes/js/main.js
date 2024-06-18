import recipes from "./recipes.mjs";

// Function to create a recipe card HTML
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe__content">
                <h2>${recipe.name}</h2>
                 <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
                <div class="recipe__decsription">
                    <p>${recipe.description}</p>
                </div>
               
            </div>
        </div>
    `;
};

// Function to render a single recipe in the HTML
const renderRecipe = (recipe) => {
    const recipesContainer = document.getElementById("recipes-container");
    recipesContainer.innerHTML = createRecipeCard(recipe);
};

// Select the first recipe (or any other specific recipe)
const selectedRecipe = recipes[0];

// Call the render function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    renderRecipe(selectedRecipe);
});

// <p><strong>Author:</strong> ${recipe.author}</p>
// <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
// <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
// <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>
// <p><strong>Ingredients:</strong></p>
// <ul>
//     ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
// </ul>
// <p><strong>Instructions:</strong></p>
// <ol>
//     ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
// </ol>
// <p><strong>Yield:</strong> ${recipe.recipeYield}</p>
// <p><strong>Rating:</strong> ${recipe.rating}</p>
