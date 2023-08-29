// const url = "https://pokeapi.co/api/v2/ability/7/";
// let apiData = [];
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     apiData = data;
//     console.log(apiData);
//   });

const WhereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}
    `);
    })
    .catch((error) => console.error(`${error.message}`));
};

WhereAmI(52.508, 13, 381);
WhereAmI(19.037, 72.873);
WhereAmI(-33.933, 18.474);
