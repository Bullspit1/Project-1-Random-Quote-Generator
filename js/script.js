// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {quote: "Moral indignation is jealousy with a halo.",
   source: "H. G. Wells",
   citation: "",
   year: "(1866-1946)"},
  {quote: "Glory is fleeting, but obscurity is forever.",
   source: "Napoleon Bonaparte",
   citation: "",
   year: "(1769-1821)"},
  {quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
   source: "Ayn Rand (1905-1982)",
   citation: "",
   year: "(1905-1982)"},
  {quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
   source: "David Brinkley",
   citation: "",
   year: ""},
  {quote: "Strive not to be a success, but rather to be of value.",
   source: "Albert Einstein",
   citation: "",
   year: ""}
];

var html;

// console.log(quotes.length);

function getRandomQuote(numQuotes){
  var rand = Math.floor(Math.random() * numQuotes);
  return quotes[rand];
}
// console.log(getRandomQuote(quotes.length));

function printQuote(){
var randomQuoteObject = getRandomQuote(quotes.length);
var eachQuote = randomQuoteObject['quote'];
var eachSource = randomQuoteObject['source'];
var eachCitation = randomQuoteObject['citation'];
var eachYear = randomQuoteObject['year'];
// console.log(eachQuote);
// console.log(eachSource);
// console.log(eachCitation);
// console.log(eachYear);
//TODO printQuote constructs a string containing the different properties of the quote object using the following HTML template:
// document.getElementsByClassName('quote')[0].innerHTML = eachQuote;
}
