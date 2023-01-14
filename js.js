let cocktailSearchbar = document.getElementById("cocktail-searchbar");
let searchButton = document.getElementById("cocktail-search-button");
let showingResults = document.getElementById("show-results-text");
let cardContainer = document.querySelector("#cards-container");
let cocktailImg = document.getElementById("cocktail-img");
let cocktailName = document.getElementById("cocktail-name");
let cocktailInstructions = document.getElementById("cocktail-instructions");
let cocktailIngredients = document.getElementById("cocktail-ingredients");

searchButton.addEventListener("click", () => {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearchbar.value}`
  ).then((response) =>
    response.json().then((data) => {
      showingResults.innerHTML = `Showing results for ${capitalize(
        cocktailSearchbar.value
      )}`;
      for (let i = 0; i < data.drinks.length; i++) {
        cardContainer.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="cocktail-card d-flex py-3 border-top border-bottom">
        <img
          id="cocktail-img"
          src="${data.drinks[i].strDrinkThumb}"
          class="w-25"
          style="object-fit: cover"
          alt="cocktail image"
        />
        <div
          class="cocktail-description-container d-flex flex-column"
          style="margin-left: 5%"
        >
          <h1 id="cocktail-name">${data.drinks[i].strDrink}</h1>
          <ul id="cocktail-ingredients">
          </ul>
          <p id="cocktail-instructions">
          </p>
        </div>
      </div>`
        );
      }
    })
  );
});

const capitalize = (word) => {
  let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedWord;
};

// data.drinks[i].strDrink = drink name
// strDrinkThumb = images
