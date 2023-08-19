// const quotes = [
//   "i am god",
//   "i am infallible",
//   "fuck you",
//   "bleh",
//   "idk",
//   "beautiful",
// ];
// const randomQuote = Math.floor(Math.random() * quotes.length);

// const quoteDisplay = document.getElementByClass("quote");

// quoteDisplay.textContent = quotes[randomQuote];

// const button = document.getElementById("button");

// button.addEventListener("click", function () {
//   const randomQuote = Math.floor(Math.random() * quotes.length);
//   quoteDisplay.textContent = quotes[randomQuote];
// });

const quotes = [
  "i am god",
  "i am infallible",
  "fuck you",
  "bleh",
  "idk",
  "beautiful",
];

const quoteDisplay = document.querySelector(".quote-box");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomQuote];
});
