let cocktailSearchbar = document.getElementById("cocktail-searchbar");
let searchButton = document.getElementById("cocktail-search-button");

searchButton.addEventListener("click", () => {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearchbar.value}`
  ).then((response) =>
    response.json().then((data) => {
      for (let i = 0; i < data.drinks.length; i++) {
        if (cocktailSearchbar.value) {
          // show error if no cock found
          console.log(data.drinks[i].strDrink);
        } else {
          console.log("not found bitch!");
        }
      }
    })
  );
});
