# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
--------------------
## To develop this game I used the following steps.
+ I had downloaded the skeleton project using GitHub link provided by Udacity in rubric structure.
+ After extracting the downloaded zip file ,I understood that most of the modifications will have to be done in `app.js`.
+ Then I had observed `shuffle` function provided by stack over flow in `app.js` . And for listing all the cards I had created an array and named it as `childList`.
+ shuffle function will be triggered when the window is loaded.
+ To convert HTML collection into an array I used spread operator (`[...]`).
+ After setting childList array as a parameter in `shuffle` function, I got new shuffled array.
+ Added a `click` EventListener to each card and named it as `showCard`.
+ Added timer function (`settimer`),and stored cards using `timeLimit` if lenth of `storeCard` is equals to two then moves will be incremented by one.
+ Then wrote a logic for `matchedCards` if two cards clicked are same then the cards are matched or else I had used map function for unmatchedCards
+ Time had been stopped when length of `matchedCards` has reached to 16.And `Swal` function was used for popup menu.That popup menu consists of title as congratulations and also stars earned will be appeared with timetaken.
+ In the function `settimer` I had used map function, seconds has kept as 0 when it has reached 59 and minutes will be increased by one. And if minute has reached 60 it will be kept to 0 and hours will be decreased.
+ I had applied a logic to stop time when length of `matchedCards` has reached to 16.
+ `starRatings` required in sweetalert2 function has came from function `starRatings` in this function i had declared as if moves are between 13 and 19 two stars are appeared on popup menu and if moves has exceeded 19 then 1 star will be appeared.
+ finally to restart the game I had written logic in the function `reuse`
