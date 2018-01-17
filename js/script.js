// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//A global scope which is an array of objects holding data for the quotes.
var quotes = [
  {
   quote: "If you fell down yesterday, stand up today.",
   source: "H. G. Wells",
   citation: "",
   year: "",
   tags: ["Writer", "Power", "Inspiration"]},
  {
   quote: "They may take our lives, but they'll never take our freedom!",
   source: "Mel Gibson",
   citation: "Braveheart",
   year: 1995,
   tags: ["Movie", "Freedom"]},
  {
   quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
   source: "Ayn Rand",
   citation: "",
   year: 1905 + "-" + 1982,
   tags: ["Novelist", "Reality"]},
  {
   quote: "Fear doesn’t shut you down; it wakes you up.",
   source: "Veronica Roth",
   citation: "Divergent",
   year: "2011",
   tags: ["Book", "Powerful"]},
  {
   quote: "Strive not to be a success, but rather to be of value.",
   source: "Albert Einstein",
   citation: "",
   year: "",
   tags: ["Value", "Inspiration"]}
];
//A variable which has nothing stored in it YET. It will hold the string concatination of the quotes, citation, ect.
var html;
//A function called getRandomQuote which takes an argument numQuotes storing the number of objects in the array (5)
//it chooses a random number between 0 and 4 and stores it in a var called rand.
//it then returns a random quote object from the quotes array.
function getRandomQuote(numQuotes){
  //a var called random which stores a random number code which is multiplied by the argument quotes.length giving the random numbers a range from how many object there are in the array (5).
  var rand = Math.floor(Math.random() * numQuotes);
  return quotes[rand];
}
//A function called randomeRGB which returns a random number from between 0 and 255.
function randomRGB(){
  return Math.floor(Math.random() * 256);
}
//A DOM that selects the transition of the body and make the color ease-in-out smoothly. As well with text.
document.getElementsByTagName('body')[0].style.transition = 'ease-in-out 1.5s';

//After the page loads run the function printQuote() which will show one of the 5 random quotes at start.
window.onload = printQuote();

//The function that prints the quotes to the page when the button is pressed.
function printQuote(){
  // a var called randomQuoteObject that stors the function getRandomQuote with the argument of quotes.length
var randomQuoteObject = getRandomQuote(quotes.length);
var eachQuote = randomQuoteObject['quote'];
var eachSource = randomQuoteObject['source'];
var eachCitation = randomQuoteObject['citation'];
var eachYear = randomQuoteObject['year'];
//This eachTag variable does the same job as the others above; however, it joins the array into one string with commas at each ones beginning
var eachTag = randomQuoteObject['tags'].join(", ");


html = '<p class="quote">' + eachQuote + '</p>';
html += '<p class="source">' + eachSource;

//An if statement which detects if one or both of the properties hold empty strings. If none of the if or if else statements are true the else is used.
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
html += '<span class="tags">' + eachTag + '</span>';

html += '</p>';

//Displays the var html with all content added to the innerHTML.
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
