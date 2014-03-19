playingWithObjects
==================

When we were beginning to learn JavaScript at The Iron Yard, this was the first assignment. There wasn't much more directive than: "make some objects and have them affect each other."

As a lover of video games, I immediately went the "game" route and created a hero and enemy object that can attack each other. Using console.log(), the effects on the properties of the objects is reflected. 

###Instructions

Copy the code from objectPlay.js and paste it into the browser console. You have the following available to you:

A `hero` object with:
- `.bellow()` method 
- `.attack(target)` method - specify a target to attack (hint: try `enemy`!)
- `.drink(target)` method - specify another object to drink (hint: try `wellOfLife`!)

An `enemy` object with an
- `.attack(target)` method -specify a target to attack (hint: try `hero`!)

A `wellOfLife` object - has no methods, but the `hero` can probably `.drink()` it!
