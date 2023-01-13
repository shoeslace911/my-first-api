let cocktailSearchbar = document.getElementById("cocktail-searchbar");
let searchButton = document.getElementById("cocktail-search-button");
let showingResults = document.getElementById("show-results-text");
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
        cocktailImg.src = data.drinks[i].strDrinkThumb;
        cocktailName.innerHTML = data.drinks[i].strDrink;
        // create new elements each loop
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
