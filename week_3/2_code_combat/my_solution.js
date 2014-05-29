// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// Rescue Mission

	// Lead me behind the ogre
	// Move down x 2;
	// Move right x 1;
	// Move up x 2;
	// Move right x 2;
	// Move down x 2;
	// Attack;

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();

// Grab the Mushroom

// Move up x 1
// Move right x 1
// Move left x 1
// Move up x 1
// Attack

this.moveUp();
this.moveRight();
// Eat the Mushroom
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// Drink Me

//Move right x 1
//Attack
// Move right x 1
// Move down x 1
// Move up x 1
// move right x 1
// Attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Taunt the Guard

// Move right x 1;
// Say "Hey there";
// Move left x 2;
// Say "Attack";
// Move right;
// Say "Follow me"
// Move right x 2;
// Move up
// Move right
// Say "Something"
// Move down
// Move right
// Move up
// Move right

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Something.");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's a Trap

// Move down x 2
// Say "Something"
// Move up x 2

this.moveDown();
this.moveDown();
this.say("Something.");
this.moveUp();
this.moveUp();

// Break the Prison
// If prisoners name is a friend's name, bust down the door,
// Else, move right.

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Phoebe")
    return true;
if(name === "Gordon")
    return true;
if(name === "Lucas")
    return true;
if(name === "Marcus")
    return true;
if(name === "MARCUS")
    return false;
if(name === "Krogg")
    return false; 
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
return true;

// Taunt
// Say something;
// Say something else;
// Say a little more;
// Say one last thing;

this.say("Hey!");
this.say("Hey!");
this.say("Hey!");
this.say("Hey!");

// Cowardly Taunt
// Move within range of ogres.
// Say something.
// Move behind towers.

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);
this.say("I can lure them in here");
this.moveXY(55, 38);
this.say("Something infuriating");
this.moveXY(68, 10);

// Commanding Followers
Say "Follow Me"
Move towards ogres.
Say Attack.
Move back.

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow me!");
this.moveXY(56, 39);
this.say("Attack!");
this.moveXY(75, 63);

// Mobile Artillery

Attack and kill one northern ogre.
Attack and kill second northern ogre.
Move South.
Attack three small southern ogres
Attack and Kill one eastern ogre
Move west
Attack and kill last ogre

this.attackXY(51, 67); //Kill N Ogre
this.attackXY(44, 65);
this.moveXY(30, 26); //Move S 
this.attackXY(47, 6);
this.moveXY(51, 41); //Kill 3 S Ogres
this.attackXY(67, 56);//Kill 1 E Ogre
this.moveXY(43, 42);  //Evade west
this.attackXY(50, 46); //Kill last ogre
 
 Release 3 Questions
 1) "this" is referring to an object.  In Javascript you can run methods/functions on an object.  Using dot notation, you can access the properties of an object.
2) The "()" in Javascript indicates where to add parameters or arguments to a method or function.
3) Semicolons indicate the end of a statement.  There are some well established rules for their use.  Codecademy has done a great job of compiling them into a cheatsheet:  http://www.codecademy.com/blog/78-your-guide-to-semicolons-in-javascript
 
 
 
// Reflection:
// Write your reflection here.

The first few challenges in this Code Combat are a bit too basic for what we have already been exposed to in the previous parts of this unit.  However, the last one called Mobile Artillary proved the importance of having a good, even if not specific, plan going into the code.  The pseudo-code had to lay out each movement and attack.  It reminded me a lot of test-driven development since you would try a move and find out the ogre's could still reach you so you would go back and adjust until the "test" passed.  I even found myself wanting to to improve the game by allowing you to move immediately after an attack.
I still realize that this game mostly uses a single variable and prescribed functions for movements and actions.  We have no control over the functions and just have to trust that the code behind them is sound.  

