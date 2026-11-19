/* Datatypes:
undefined, null, boolean, string, symbol, number and object
*/

// Variable:

// 1. var - kan bruges i hele ens program
var myName = "Rasmus";

myName = "Ross";

// 2. let - kan kun bruges inden for scopet den er declared i

let ourName = "EAA";

// 3. const - kan ikke ændres - konstant.
const pi = 3.14;



// Storing values with assignment operator:

// declare en variabel:
var a;
// assign en variabel:
a = 7;
var b = 2;

a = b;


// Adding/Subtracting numbers:

var sum = 10 + 10;
console.log(sum);

sum = sum - 10;
console.log(sum);

// Multiplying/Dividing number:
var multiply = 10 * 10;
console.log(multiply);

multiply = 50/5;
console.log(multiply);


// Incrementing/Decrementing numbers:

var myVar = 87;

myVar = myVar + 1;
// Better:
myVar++;

myVar--;


var product = 2.0 * 2.5;
console.log(product);


// Remainder:

var remainder;

remainder = 11 % 3;
console.log(remainder);


// Augmented math operations
// f.eks.:
var a = 3;
var b = 17;
var c = 12;

// a = a + 12; -->
a += 12;

// b = b + 9; -->
b += 9;

// c = c + 7; -->
c += 7;

console.log(a, b, c);


// Works the same with -+:
a -= 6;
console.log(a);

// Wroks same with mulitplication:
a *= 3;
console.log(a);

// Works same with division:
a /= 3;
console.log(a);


// Declare String variables:

var myFirstName = 'Rasmus';
var myLastName = 'Ross';


// Literal quotes inside Strings (escape characters):

// Fungerer ikke: var  myStr = "I am a "double quoted" string inside "double quotes"";
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
// eller brug forskellige singe tick/apostrof:
myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);


// Escape sequences:
/*
CODE OUTPUT:
\'  singe quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab (indrykning)
\b  backspace
\f  form feed
*/
myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);


// Concatenate Strings:

var ourStr = "I come first. " + "I come second";
console.log(ourStr);

// Concatenate Strings with +=;
var ourStr = "I come first. ";
ourStr += "I come second";
console.log(ourStr);


// Constructing Strings with variables:

var first = "Rasmus";
var second = "Hello, my name is " + first + ", how are you?";

console.log(second);


// Appending variables to Strings:
var adjective = "awesome!";
var sentence = "I am actually very ";
sentence += adjective;
console.log(sentence);


// Find length of String:

var longString = "This string is very, very, very long. Wonder how long it is?";

var stringLength = longString.length;

console.log("The sentence \"" + longString + "\" is " + stringLength + " characters.");


// Bracket notation for Strings:
var firstLetterOfFirstName = 5;

var firstName = "Rasmus";

var firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName);



// Find the Nth character:

var firstName = "Rasmus";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastLetterOfFirstName = firstName[firstName.length];
console.log(lastLetterOfFirstName);