import recipes from "./recipes.mjs";

function tagsTemplate(tags) {
    // Transform the array of tags into HTML
    let html = '<div class="tags">';
    tags.forEach(tag => {
        html += `<span class="tag">${tag}</span>`;
    });
    html += '</div>';
    return html;
}

function ratingTemplate(rating) {
    // Begin building an HTML string for the rating
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

const renderRecipe = (recipe) => {
    const recipesContainer = document.getElementById("recipes-container");
    recipesContainer.innerHTML = createRecipeCard(recipe);
};

// Function to select a random recipe
const selectRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
};

// Call the render function with a random recipe when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const selectedRecipe = selectRandomRecipe();
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
