# javascriptChallenge

Countdown Timer
Create
 a simple countdown timer that looks like this:



The
 countdown should update every second.


You may use any JS framework or no framework
 at all



Please write CSS without a framework


Provide
 a Github or JSFiddle link



Coin Flip
You
 are provided this flip function:

function
flip()
 {

 return
Math.random()
>=
0.5;

}

You
 must implement a randomNumber(n)
 function that generates a random number greater than or equal to 0, and less than input
n.


n
 must be greater than 0



n
 must be less than 1,000,000



Your only source of randomness must be
 the provided flip()
 function



You cannot use Math.random in your implementation



You can use Google to figure out how
 to do this


function
randomNumber(n)
 {

 /*

   Your implementation, using the
 flip() function

 */

 

 //
 Returns a number between [0, n)

}

An
 example execution of your function:

randomNumber(500)
// returns 123

randomNumber(1)
// returns 0

randomNumber(500)
// returns 466

randomNumber(1000001)
// throw error
