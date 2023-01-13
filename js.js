let cocktailSearchbar = document.getElementById("cocktail-searchbar");
let searchButton = document.getElementById("cocktail-search-button");
let showingResults = document.getElementById("show-results-text");

searchButton.addEventListener("click", () => {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearchbar.value}`
  ).then((response) =>
    response.json().then((data) => {
      showingResults.innerHTML = `Showing results for ${capitalize(
        cocktailSearchbar.value
      )}`;
      for (let i = 0; i < data.drinks.length; i++) {
        console.log(data.drinks[i]);
      }
    })
  );
});

const capitalize = (word) => {
  let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedWord;
};

// data.drinks[i].strDrink = drinks
