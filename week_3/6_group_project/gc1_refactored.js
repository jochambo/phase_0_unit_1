// My role in the group is: Person 4: Refactor

// Here is my part of the challenge:

//User story: SUM will take any list of numbers and add them together and give you back the total.
var sum = function(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		result += array[i];
		}
		return "The sum is " + result + ".";
}

//User story:  MEAN will take any list of numbers and return an average by adding them all together and dividing the sum by the total number of numbers.
var mean = function(array) {
	var sum = 0
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
		var result = sum / array.length; 
		}
		return "The average is " + result + ".";
}

//User story: MEDIAN will take a list of numbers and sort them in ascending order and return the middle number in the list. In the case of an even number of numbers, it will give back the average of the two middle numbers.
var median = function(array) {
	var half = (array.length / 2);
	array.sort(function(a, b) {
		return a-b});
	if (array.length % 2 === 0) {
	  var result = (array[half - 1] + array[half])/2;
	  return "The median is " + result + ".";
  } else {
  	return "The median is " + array[half - .5] + ".";
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