const url = "https://pokeapi.co/api/v2/ability/7/";
let apiData = [];
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    apiData = data;
    console.log(apiData);
  });
