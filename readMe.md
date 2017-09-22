#Sparta Core Project 1 - ReadMe
##Abass Khan


###Aims & Objectives

Using the following:

* HTML5
* CSS
* Bootstrap (version 4)
* JQuery
* Javascript
* GIT

The aim of the project is to present a game of our chosing. The game must include:

* Instructions section.
* Display a message of the users score upon completion of the game.
* Include a leaderboard.
* Hosted online


###The plan
To achieve the aims and objectives of this project, a small plan was devised where I considered:

**Type of game**: What type of game do I want to produce **e.g.** will it be a click based or a keyboard press game? As well as this, I considered the purpose of the game and how will it be played and presented?


**Features of the game**: I wanted to incorporate the features listed below to make it more user friendly and to increase the in game experience.

* A reset button
* A timer
* An area which displays the users final score
* The top 3 high scores

Regularly git commit and push the work done, with a minimum of 30 commits.


###The Game: ATOM
After careful consideration, I decided upon designing a game which will use the keyboard arrows to navigate an object around a board.

My game is called **ATOM**, with the idea being inspired from the classic snake.

**The White Atom:** Using the up, down, left and right keys, the player navigates a white atom around the board  whilst attempting to collect as many protons as possible within a set time limit of 30 seconds.

**Red Proton:** The protons are coloured red and upon collecting them, the player gains 10 points.

**Green Electrons:** 3 electrons will be randomly generated onto the board and will relocate randomly whenever the player moves the white atom. If the player collects a green electron, 5 points will be deducted from the score.

**Features:** The player will have 30 seconds to move the white atom around to collect as many protons as possible, without picking up any electrons!

A timer counting down will be visible to the right of the board. To the right of the timer will be a scoreboard which updates whenever the user collects a proton or a electron.

Once the game has finished, a message will appear 1 second later to inform the user the game has finished and what their score was. A second later, a high score board will appear which only displays the top 3 highest scores (user **CANNOT** input their name along with their scores). After this, a reset button will appear where the user has the option to start the game again and attempt to better their previous scores. 

###Functionality
This is a simple application that displays the game; ATOM. Manipulating when the content of the DOM should be displayed and hidden was achieved by using JavaScript and JQuery functions as well as various other features.

###Implementation
####General
In order to make things easier for myself, I sketched a series of wireframe designs. Doing this assisted me to prioritise tasks and allowed me to create mini milestones (listed below).

**Milestones for the game:**

* By the end of day 2 have a basic version of the game that functions.
* By the end of day 3 add styling and extra functions such as: reset button, timer and display the scores.
* By the end of day 4 style to perfection and complete coding.

During the course of the week, the ReadMe.md file was updated at the end of every day, with the presentation being prepared towards the end of day 4.

####The Code
When it came to writing the code, the first step I took was to write comments in the index.html and main.js files. This gave me time to think through, what do I need to do? and how do I need to go about making the code flow and function without repeating code?

The key features of my code were as follows:

* Bootstrap (version 4): used cards, columns, container-fluid and rows.
* CSS: used for the styling of the whole HTML.
* Favicon link.
* HTML5 elements with the use of semantic tags such as main and section.
* JQuery: used extensively where it could, as it reduced the line of code. It was really useful to use when appending elements **e.g.** when appending a list item into a list item as well as getting elements and displaying the scores in the HTML. The math.Random function was useful for generating the protons/electrons randomly on the board.
* JavaScript: made use of the for and while loops, as well as using functions to neaten the code and reduce the lines of code. I also used the if, else and else if statements.

###Encountering hurdles
During the course of this project, there were various hurdles that I encountered. My most apparent hurdle was being hung up on one problem for so long that I was progressing slowly, meaning the deadlines I had set were not met. After day 1, I rectified this by replanning and if I did slow down during a certain aspect of my code, I would move onto the styling aspect or give myself time away from the screen.

Other hurdles I experienced were, deciding what the most suitable JQuery function was to use for a given scenario. Experimenting with various functions gave me knowledge on what would work, but also meant I lost out on time. Furthermore, when it came to writing functions, I would forget to call the function which meant it wouldn't display in the DOM, which in turn made me think the function was incorrect.

Overall, I am proud of what has been achieved within the week. I feel like I pushed myself beyond my own expectations and was allowed to display creativity throughout this whole project.
###Future Work
* Make the game more responsive so it can be used on mobile and tablets.
* Eradicate the tiny bugs in the game, so it runs smoothly all the time, in turn increasing the user's in game experience.
* Add extra elements into the game **e.g.** changes in difficulty, names being added into the highscore board.

###Link to the game
[Click here to access ATOM](https://kh4n10.github.io/firstProject/)

This site has the most recent upto date code.