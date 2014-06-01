// My role in the group is: Person 4: Refactor

// Here is my part of the challenge:

//User story: SUM will take any list of numbers and add them together and give you back the total.
var sum = function(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
    }
console.log("The sum is " + result + ".");
return result;
}

//User story:  MEAN will take any list of numbers and return an average by adding them all together and dividing the sum by the total number of numbers.
var mean = function(array) {
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
    var result = sum / array.length; 
    }
    console.log("The mean is " + result + ".");
    return result;
}

//User story: MEDIAN will take a list of numbers and sort them in ascending order and return the middle number in the list. In the case of an even number of numbers, it will give back the average of the two middle numbers.
var median = function(array) {
  var half = (array.length / 2);
  array.sort(function(a, b) {
    return a-b});
  if (array.length % 2 === 0) {
    var result = (array[half - 1] + array[half])/2;
    console.log("The median is " + result +".")
    return result;
  } else {
    console.log("The median is " + array[half - .5] +".");
    return array[half - .5];
  }
}

// Experimental refactored code... Can not get this to work.
// The sum function could be nested inside of mean getting rid of the duplicate code.
// But mean is returning an average of "0" and sum is complaining that "number is not a function."
// 
// var mean = function(array) {
// 	var sum = function(array) {
// 		var result = 0;
// 		for (var i = 0; i < array.length; i++) {
// 			result += array[i];
// 		}		
// 		console.log("The sum is " + result + ".");	
// 	}
// 	var sum = 0;
// 	var meanTotal = sum / array.length; 
// 	console.log("The average is " + meanTotal + ".");
// }

//Reflection:
// - What was this experience like? 
// I enjoyed parts of this challenge, namely, working in a group to solve problems.  I think our group was great at sticking to the rules of the challenge and respecting the process of user stories, pseudocoding, coding, and refactoring.  I personally enjoyed seeing the initial code solution and writing the user stories to what was given to me.  
// - What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
// What I did not enjoy was refactoring.  I'm not at all comfortable with JavaScript syntax and found myself very frustrated at being stuck working through that experimental code above.  I knew what I wanted to do to make the code cleaner but couldn't find the answers I needed to make the code work.
// I will figure it out, but unfortunately not it time for this challenge.  I did manage to realize that we needed a way to display the results of our functions in a cleaner manner and added the console.log statements with the return statements.
// - Was your group successful in passing the tests? 
// I'm not sure if I'm supposed to be running the tests given the instructions, so I'll update this question later if necessary.

