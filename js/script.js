// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//A global scope which is an array of objects holding data for the quotes.
//TODO Add more properties to the quote object. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
var quotes = [
  {quote: "Moral indignation is jealousy with a halo.",
   source: "H. G. Wells",
   citation: "fjdfjsdkf",
   year: 1866 + "-" + 1946,
   tags: ["Humor", "Business"]},
  {quote: "Glory is fleeting, but obscurity is forever.",
   source: "Napoleon Bonaparte",
   citation: "",
   year: 1769 + "-" +1821,
   tags: ["Humor"]},
  {quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
   source: "Ayn Rand",
   citation: "",
   year: 1905 + "-" + 1982,
   tags: ["Business"]},
  {quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
   source: "David Brinkley",
   citation: "fdfds",
   year: "",
   tags: [""]},
  {quote: "Strive not to be a success, but rather to be of value.",
   source: "Albert Einstein",
   citation: "",
   year: "",
   tags: [""]}
];
//A variable which has nothing stored in it YET.
var html;
var timerBoolian = true;
var setTimeOut;
//A function called getRandomQuote which takes an argument numQuotes storing the number of objects in the array (5)
//it chooses a random number between 0 and 4 and stores it in a var called rand.
//it then returns a random quote object from the quotes array.
function getRandomQuote(numQuotes){
  var rand = Math.floor(Math.random() * numQuotes);
  return quotes[rand];
}
//A function called randomeRGB which returns a random number from between 0 and 255.
function randomRGB(){
  return Math.floor(Math.random() * 256);
}

//The function that prints the quotes to the page when the button is pressed.
function printQuote(){
var randomQuoteObject = getRandomQuote(quotes.length);
var eachQuote = randomQuoteObject['quote'];
var eachSource = randomQuoteObject['source'];
var eachCitation = randomQuoteObject['citation'];
var eachYear = randomQuoteObject['year'];
var eachTag = randomQuoteObject['tags'];


html = '<p class="quote">' + eachQuote + '</p>';
html += '<p class="source">' + eachSource;

if (eachCitation === "" && eachYear === "") {
  html += "";
}
else if(eachCitation === ""){
  html += '<span class="year">' + eachYear + '</span>';
}
else if(eachYear === ""){
  html += '<span class="citation">' + eachCitation + '</span>';
}
else{
  html += '<span class="citation">' + eachCitation + '</span>';
  html += '<span class="year">' + eachYear + '</span>';
}

html += '</p>';

document.getElementById('quote-box').innerHTML = html;

//Each variable stores the randomRGB function which stores a random number.
var red = randomRGB();
var green = randomRGB();
var blue = randomRGB();
//This variable puts each random color into a rgb string and is added into the background color of the body.
var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
document.getElementsByTagName('body')[0].style.backgroundColor = rgbColor;

}
//The setInterval refreshes the quote automatically after every 30 seconds.
setInterval(printQuote, 31000);
