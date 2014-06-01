// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Joe Hendele
//  2. Joey Chamberlin


// 0. "YOU SIGNED... WHO?!"
var clientList = [];


// 1. "Here they Come!"
var adamSandler = {
  name: 'Adam Sandler',
  age: 47,
  quote: 'That\'s your home! Are you too good for your home?!'
  };
  
var kristenBell = {
  name: 'Kristen Bell',
  age: 33,
  quote: 'Do you wanna build a snowman?'
  };
  
var jimCarrey = {
  name: 'Jim Carrey',
  age: 52,
  quote: '...So you\'re telling me there\'s a chance? YEAH!'
  };
  
var clintEastwood = {
  name: 'Clint Eastwood',
  age: 83,
  quote: 'Get off my lawn!'
  };
  
var morganFreeman = {
  name: 'Morgan Freeman',
  age: 76,
  quote: 'Andy Dufresne - who crawled through a river of shit and came out clean on the other side.'
  };



// 2. "TIME IS MONEY!"

var Client = function (name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

var clientList = [adamSandler, kristenBell, jimCarrey, clintEastwood, morganFreeman];

// 4. "But wait, there's more!"

var showQuote = function(clientName) {
  return clientName.quote;
};

showQuote(adamSandler);

// 5.  ** BONUS **

var talentAgency = {
  name: 'Joe and Joey Represent You!',
  address: '404 Code Lane',
  email: 'agency@gmail.com'
  };

var clientListAd = [adamSandler, kristenBell, jimCarrey, clintEastwood, morganFreeman, talentAgency];

//  6.  Your Reflection:
GPS 1.2 was tough not because of the coding, but because this was two people fighting through the problem solving with very limited viewports into the other persons world or mind.  Google Hangouts proved to be pretty useful towards the end when we realized that we could share our terminal or console windows.  Stypi was useful for crafting the code.  
The problem for pairing though was that it is difficult to manage expectations when also managing three or four open windows, multiple browser tabs, etc.  We finally caught on to verbalizing where we were looking and what we were thinking.  The navigator and driver roles switched somewhat more fluidly this time, though we did good about vocalizing when one of us was taking the keyboard.
I did learn a lot more about Constructors, though I'm still getting a bit hung up on some of the syntax.



