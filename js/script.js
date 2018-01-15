// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {quote: "Moral indignation is jealousy with a halo.",
   source: "H. G. Wells",
   citation: "fjdfjsdkf",
   year: 1866 + "-" + 1946},
  {quote: "Glory is fleeting, but obscurity is forever.",
   source: "Napoleon Bonaparte",
   citation: "",
   year: 1769 + "-" +1821},
  {quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
   source: "Ayn Rand",
   citation: "",
   year: 1905 + "-" + 1982},
  {quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
   source: "David Brinkley",
   citation: "fdfds",
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

html = '<p class="quote">' + eachQuote + '</p>';
html += '<p class="source">' + eachSource;
// html += '<span class="citation">' + eachCitation + '</span>';
// html += '<span class="year">' + eachYear + '</span>';
if (eachCitation === "" && eachYear === "") {
  html += "";
}
else if(eachCitation === ""){
  // console.log("empty citation");
  // html -= '<span class="citation">' + eachCitation + '</span>';
  html += '<span class="year">' + eachYear + '</span>';
}
else if(eachYear === ""){
  // console.log("empty year");
  // html -= '<span class="year">' + eachYear + '</span>';
  html += '<span class="citation">' + eachCitation + '</span>';
}
else{
  // console.log("working");
  html += '<span class="citation">' + eachCitation + '</span>';
  html += '<span class="year">' + eachYear + '</span>';
}
// html += '<span class="citation">' + eachCitation + '</span>';
// html += '<span class="year">' + eachYear + '</span>';
html += '</p>';
document.getElementById('quote-box').innerHTML = html;
// document.getElementsByClassName('quote')[0].innerHTML = eachQuote;
}
