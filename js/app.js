"use strict";
var parent = document.getElementById("deck");
/* Create a list that holds all of your cards*/

// global declarations
var child = document.getElementsByClassName("card");
var childList = [...child];
let timeLimit = false;
var sec = 0;
var min = 0;
var hour = 0;
var time;
var timer = document.getElementById("times");
var moves = 0;
var moveSec = document.getElementById("moves");
var storeCard = [];
var starNo = 3;
var starSec = [...document.getElementsByClassName("fa-star")];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

// storing cards into an array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

parent.onload = inceptgame();

function inceptgame() {
  var finalizedCards = shuffle(childList);
  var i = 0;
  while (i < finalizedCards.length) {
    parent.append(finalizedCards[i]);
    i++;
  }
}

for (var i in childList) {
  childList[i].addEventListener("click", showCard);
}

function showCard() {
  if (timeLimit == false)
    settimer();
  timeLimit = true;
  this.classList.add("card");
  this.classList.add("open");
  this.classList.add("show");
  this.classList.add("disable");
  storeCard.push(this);
  // if two cards are clicked moves will be increased
  if (storeCard.length == 2) {
    moves = moves + 1;
    moveSec.innerHTML = moves;
    starRatings();
    // cards are clicked and are matched
    if (storeCard[0].children[0].classList.item(1) == storeCard[1].children[0].classList.item(1)) {
      storeCard.map((i) => {
        i.classList.add("match");
      })
      console.log(matchedCards.length);
      // closing timer after completing the game
      if (matchedCards.length == 16) {
        clearInterval(time);
        // pop up menu
        Swal.fire({
          title: "GOOD JOB",
          html: 'you have earned ' + '<strong style ="color:#0000db">' + starNo + '<i class="fa fa-star"> </i> </strong> <br> and you completed this game with the time of <br>' + hour + ' hour :' + min + 'minuites :' + sec + 'seconds',
          confirmButtonText: '<i class="fa fa-refresh"></i> Restart',
        }).then(() => {
          window.location.reload();
        });
      }
      storeCard = [];
    }

    // cards are clicked and are unmatched
    else {
      storeCard.map((i) => {
        i.classList.add("unmatch");
      })
      storeCard.map((card) => {
        setTimeout(() => {
          card.classList.remove("unmatch", "open", "show", "disable");
        }, 200);
      })
      storeCard = [];
    }
  }
}
var matchedCards = document.getElementsByClassName("match");

// timer
function settimer() {
  time = setInterval(() => {
    sec = sec + 1;
    if (sec == 59) {
      sec = 0;
      min = min + 1;
    }

    if (min == 60) {
      min = 0;
      hour = hour + 1;
    }

    timer.innerHTML = hour + " : " + min + " : " + sec;
  }, 1000)

}

if (matchedCards.length == 16) {
  clearInterval(time);
}

// star Ratings
function starRatings() {

  if (moves >= 13) {
    starNo = 2;
    starSec[2].style.display = "none";
  }

  if (moves > 19) {
    starNo = 1;
    starSec[1].style.display = "none";
  }

}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
