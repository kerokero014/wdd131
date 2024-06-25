import recipes from "./recipes.mjs";

function tagsTemplate(tags) {
    let html = '<div class="tags">';
    tags.forEach(tag => {
        html += `<span class="tag">${tag}</span>`;
    });
    html += '</div>';
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe__content">
            ${tagsTemplate(recipe.tags)}
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <div class="recipe__description">
                    <p>${recipe.description}</p>
                </div>
            </div>
        </div>
    `;
};

const renderRecipes = (recipesList) => {
    const recipesContainer = document.getElementById("recipes-container");
    recipesContainer.innerHTML = recipesList.map(recipe => createRecipeCard(recipe)).join('');
};

function filter(query) {
    const filtered = recipes.filter(recipe => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            recipe.name.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))) ||
            (recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery)))
        );
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = filter(searchInput);
    renderRecipes(filteredRecipes);
}

document.addEventListener("DOMContentLoaded", () => {
    // Assuming the intention is to display a random recipe on page load
    // We need to define the `selectRandomRecipe` function to select a random recipe from the recipes list
    const selectRandomRecipe = () => recipes[Math.floor(Math.random() * recipes.length)];

    // Fix: Changed `renderRecipe` to `renderRecipes` and passed an array with the selected recipe
    // as `renderRecipes` expects an array of recipes
    const selectedRecipe = selectRandomRecipe();
    renderRecipes([selectedRecipe]);

    const form = document.querySelector('form');
    form.addEventListener('submit', searchHandler);
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
