// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2? Counter1 is a higher order function that declares a counter in its block scope and returns a child function that increments that count variable by 1. Counter2 initilizes a variable in the global scope and then creates a function to increament the global variable count by 1.
 *
 * 2. Which of the two uses a closure? How can you tell?Counter1 uses a closure because it has access to the parent scope. The counter function which is the inner function has access to the outer function which is counterMaker.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? Counter1 code would be preferable if you want to store data in a separate scope, and share it only where necessary. It allows the child function to easily access the parent function. Counter2 would only be preferable if you want multiple functions to have access to the global variable.
 *
 *
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let num = Math.floor(Math.random() * 3);
  return num;
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(getScore, numOfInning) {
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < numOfInning; i++) {
    homeScore = homeScore + getScore();
    awayScore = awayScore + getScore();
    // console.log(homeScore, awayScore);
  }

  let scoreBrd = {
    Home: homeScore,
    AwayScore: awayScore,
  };
  return scoreBrd;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore` aka finalscore
(2) Callback function `inning` aka inning()
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inning, numOfInning) {
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 1; i <= numOfInning; i++) {
    homeScore += inning();
    awayScore += inning();
    // console.log([i] + " inning: " + awayScore + " - " + homeScore);
    getInningScore(inning, numOfInning);
    // console.log([i], homeScore, awayScore);
    console.log([i] + " inning " + homeScore + " - " + awayScore);
  }
  return "Final Score " + homeScore + " - " + awayScore;
  // console.log("Final Score " + homeScore + " - " + awayScore);
}

console.log(scoreboard(finalScore, inning, 9));
