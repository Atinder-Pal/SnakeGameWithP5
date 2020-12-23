# SnakeGameWithP5

In the main branch of project, I tried to simulate the classic Snake Game using P5.js Library by following this [tutorial](https://www.youtube.com/watch?v=AaGK-fj-BAM).

This game works but need some refactoring like-
  * Snake should not be allowed to change direction on same x- axis or y-axis. Currently if user tried to go backwards, same starts from beginning.
  * Snake also starts over if it hits the wall.
  

UPDATE: <br />
Check the ES6 branch for the changes I implemented in the game.This time I followed a different [tutorial](https://thecodingtrain.com/CodingChallenges/115-snake-game-redux.html).<br />
I re-built th entire game to be consistent with ES6 using Class Snake instaed of Constructor function (as I did in main branch). <br />
I first built the game as is and then implemented few changes :
 * Disabled the backward movement of snake.
 * Enabled the snake to go into the wall and come out from the opposite wall.
 * Made food for snake flashing so it is easier to spot
 * Made head of the snake different color to distinguish from rest of the body
 * Implemented scores and displayed live score on screen
 * Implemented Highest Score feature and stored it in local storage
 * Added restart button when game ends
 * Added Level 2 button when Game ends where snake speed is increased to make it harder for player


