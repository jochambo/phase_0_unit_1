// This is a solo challenge

// Your mission description:
// This game is a partial rip-off from a puzzle used to teach the concept of the Diffie-Hellman Key Exchange.  I think 
// I read it first in the book Crypto by Steven Levy.
// You have in your possession a shoe-box full of cash.  You also have a padlock and a key which will lock the outside 
// of a box.  You are trapped on a desert island that is inaccessible to all except a single ferryman that visits 
// everyday at noon.  If you can get the ferryman to deliver the box to your friend, he could use some of the jewels 
// to get you saved from the island.  The only problem is that the ferryman is a thief who will steal anything that 
// doesn't have a lock on it.  For one jewel though, he will deliver a locked box to your friend.  Your friend also 
// has a lock and key.
// The challenge is to get your friend the treasure safely so that you can get off of the island.

// Pseudocode
// First the variables:

// A box has money and locks and can be locked.
// A person can be a ferryman, a friend, or you. Everyone can have money, the box and all but the ferryman can have a 
// lock.
// Now the moves: 

// You lock the box with $100 with your lock.
// Deliver box to ferryman.  If box does not have lock, ferryman steals money.
// Pay ferryman one dollar.
// Your friend retrieves the box from the ferryman.
// Your friend places his lock on the box.
// Your friend delivers the box to the ferryman.
// Your friend pays the ferryman one dollar.
// You retrieve the box from the ferryman.
// You remove your lock from the box.
// You deliver the box to the ferryman.
// You pay the ferryman one dollar.
// Your friend retrieves the box.
// Your friend removes his lock.
// Your friend removes $100.

// Initial Code
var boxState = {
	money: 100,
	lock: 0
};
var locked = false;
var person = {
	ferryman: {
		money: 0,
		box: false
	},
	friend: {
		money: 1,
		lock: 1, 
		box: false
	},
	me: {
		money: 2, 
		lock: 1,
		box: true
	}
};

var giveToFerry = function(x) {
	if (locked === true) {
		boxState.money = 0;
		console.log("The ferryman has stolen your money!");
	} else if (x === person.me){
		person.ferryman.box = true;
		person.me.box = false;
		person.me.money -= 1;
		person.ferryman.money += 1;
	} else {
		person.ferryman.box = true;
		person.friend.box = false;
		person.friend.money -= 1;
		person.ferryman.money += 1;
	}
};
var getFromFerry = function(x) {
	if (x === person.me){
		person.ferryman.box = false;
		person.me.box = true;
	} else {
		person.ferryman.box = false;
		person.friend.box = true;
	}
};
var addLock = function(x) {
	if (x === person.me && person.me.lock === 1) {
		boxState.lock = boxState.lock + 1;
		locked === true;
		person.me.lock = person.me.lock -= 1;
	} else if (x === person.friend && person.friend.lock === 1) {
		boxState.lock = boxState.lock + 1;
		locked === true;
		person.friend.lock = person.friend.lock -= 1;
	} else {
		console.log("You don't have a lock!");
	}
};
var removeLock = function(x) {
	if (x === person.ferryman) {
		console.log ("You don't have a key, ferryman!");
	} 
	else {
		x.lock = x.lock + 1;
		boxState.lock = boxState.lock - 1;
	}
	if (boxState.lock === 0) {
		locked = false;
	}
	if (person.friend.box === true && boxState.lock === 0) {
		person.friend.money = 100;
		boxState.money = 0;
	}
};
var transferMoney = function(from, to, amount){
	to = from - amount;
};

//Run this code:

console.log(person);
addLock(person.me);
giveToFerry(person.me);
getFromFerry(person.friend);
addLock(person.friend);
giveToFerry(person.friend);
getFromFerry(person.me);
removeLock(person.me);
giveToFerry(person.me);
getFromFerry(person.friend);
removeLock(person.friend);
console.log(person);

// //Driver Code
// function assert(test, message, test_number) {
// 	if(!test) {
// 		console.log(test_number + "false");
// 		throw "ERROR: " + message;
// 	}
// 	console.log(test_number + "true");
// 	return true;
// }

// //lock the box
// assert (
// (person.me.lock === 0),
// 	"Me should not have a lock.",
// 	"1."
// 	)
// assert (
// 	(locked = true),
// 	"The box should be locked.",
// 	"2."
// 	)
// // //give to the ferryman
// assert (
// 	(boxState.money === 100),
// 	"The box should contain $100",
// 	"3."
// 	)
// assert (
// 	(person.me.box === false),
// 	"I should not have the box",
// 	"4."
// 	)
// assert (
// 	(person.ferryman.money === 1),
// 	"The ferryman should be paid",
// 	"5."
// 	)
// assert (
// 	(person.me.money === 1),
// 	"I should have $1",
// 	"6."
// 	)
// //friend gets the box
// assert (
// 	(person.friend.box === true),
// 	"Friend should have the box",
// 	"7."
// 	)
// assert (
// 	(person.ferryman.box === false),
// 	"Ferryman should not have the box",
// 	"8."
// 	)
// //friend locks the box
// assert (
// 	(person.friend.lock === 0),
// 	"Friend should not have a lock.",
// 	"9."
// 	)
// assert (
// 	(boxState.lock === 2),
// 	"Box should be double-locked.",
// 	"10."
// 	)
// //friend gives box to ferryman
// assert (
// 	(boxState.money === 100),
// 	"The box should contain $100",
// 	"11."
// 	)
// assert (
// 	(person.friend.box === false),
// 	"Friend should not have the box",
// 	"12."
// 	)
// assert (
// 	(person.ferryman.money === 2),
// 	"The ferryman should be paid",
// 	"13."
// 	)
// assert (
// 	(person.friend.money === 0),
// 	"Friend should have $0",
// 	"14."
// 	)
// //I get the box
// assert (
// 	(person.me.box === true),
// 	"I should have the box",
// 	"15."
// 	)
// assert (
// 	(person.ferryman.box === false),
// 	"Ferryman should not have the box",
// 	"16."
// 	)
// //Remove me.lock
// assert (
// 	(person.me.lock === 1),
// 	"I should have a lock.",
// 	"17."
// 	)
// assert (
// 	(boxState.lock === 1),
// 	"Box should only have one lock.",
// 	"18."
// 	)
// // No tests for Give to ferryman & Return to Friend
// // Friend unlocks box
// assert (
// 	(locked === false),
// 	"Box should be unlocked.",
// 	"19."
// 	)
// assert (
// 	(boxState.money === 0),
// 	"Box should not have any money in it",
// 	"20."
// 	)
// assert (
// 	(person.friend.money === 100),
// 	"Friend should have received the money",
// 	"21."
// 	)

// Refactored Code






// Reflection
// 
// Wow, I may have gotten out of hand with this.  I had my first experience of having a clear plan and wanting to 
// finish a coding project.  I wanted to finish building this and it was liberating to see it finished.  

// I realized early on that I needed to be able to test that each character was acting appropriately and that the box 
// was staying secure.  I actually figured out how to write tests after completing section 4 and they were 
// indispensible to making this program run.  
// I think I finally understand when to use assignement (=) and "is the same as" (===)!  This is a big win for me.
// Okay, so things I would like to change.  I would make specific locks for each character.  I would figure out how to 
// make the tests run only when required (As it is I commented them out as I worked through the commands.).  I would 
// have stuck to TDD.  There were a few times when I knew the command I needed to write, but I stopped and wrote the 
// tests first.  And in keeping with the crypto theme, I would make the main character able to send multiple boxes out 
// but still keep the other characters' keys unique.  I would also like to figure out how to D.R.Y. this code a bit 
// more.
// Finally, I would love to turn this into an HTML/CSS document.  Time may have gotten the better of me though.
// 
// 
// 
// 