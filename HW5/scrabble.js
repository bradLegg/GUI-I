/*
File: scrabble.js
Author: Bradley R. Legg, UMass Lowell Computer Science, bradley_legg@student.uml.edu
a. Bradley R. Legg
b. 15 August 2021
c. JavaScript jQuery file that handles the single-line scrabble game. Done primarily
   the data structure provided with an object copy.
*/

// added letter and img, updated tile images to match my files
// credit: Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
var data = []

data["A"] = { "letter": "A", "value": 1, "number-remaining": 9, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_A.jpg'>" }
data["B"] = { "letter": "B", "value": 3, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_B.jpg'>" }
data["C"] = { "letter": "C", "value": 3, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_C.jpg'>" }
data["D"] = { "letter": "D", "value": 2, "number-remaining": 4, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_D.jpg'>" }
data["E"] = { "letter": "E", "value": 1, "number-remaining": 12, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_E.jpg'>" }
data["F"] = { "letter": "F", "value": 4, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_F.jpg'>" }
data["G"] = { "letter": "G", "value": 2, "number-remaining": 3, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_G.jpg'>" }
data["H"] = { "letter": "H", "value": 4, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_H.jpg'>" }
data["I"] = { "letter": "I", "value": 1, "number-remaining": 9, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_I.jpg'>" }
data["J"] = { "letter": "J", "value": 8, "number-remaining": 1, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_J.jpg'>" }
data["K"] = { "letter": "K", "value": 5, "number-remaining": 1, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_K.jpg'>" }
data["L"] = { "letter": "L", "value": 1, "number-remaining": 4, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_L.jpg'>" }
data["M"] = { "letter": "M", "value": 3, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_M.jpg'>" }
data["N"] = { "letter": "N", "value": 1, "number-remaining": 6, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_N.jpg'>" }
data["O"] = { "letter": "O", "value": 1, "number-remaining": 8, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_O.jpg'>" }
data["P"] = { "letter": "P", "value": 3, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_P.jpg'>" }
data["Q"] = { "letter": "Q", "value": 10, "number-remaining": 1, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_Q.jpg'>" }
data["R"] = { "letter": "R", "value": 1, "number-remaining": 6, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_R.jpg'>" }
data["S"] = { "letter": "S", "value": 1, "number-remaining": 4, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_S.jpg'>" }
data["T"] = { "letter": "T", "value": 1, "number-remaining": 6, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_T.jpg'>" }
data["U"] = { "letter": "U", "value": 1, "number-remaining": 4, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_U.jpg'>" }
data["V"] = { "letter": "V", "value": 4, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_V.jpg'>" }
data["W"] = { "letter": "W", "value": 4, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_W.jpg'>" }
data["X"] = { "letter": "X", "value": 8, "number-remaining": 1, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_X.jpg'>" }
data["Y"] = { "letter": "Y", "value": 4, "number-remaining": 2, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_Y.jpg'>" }
data["Z"] = { "letter": "Z", "value": 10, "number-remaining": 1, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_Z.jpg'>" }
// data["_"] = { "letter": "_", "value": 0, "number-remaining": 1, "img": "<img src='./graphics_data/Scrabble_LetterTiles/Scrabble_Tile_Blank.jpg'>" }

var word_display = "";
var index = 0;
var score = 0;
var tileCount = 100;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
var tiles = Object.assign({}, data)

// gets random properties from objs
// credit: https://stackoverflow.com/a/15106541
var randomProperty = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

// updates the score
function updateScore(points) {
  if (index == 2 || index == 5) {
      points = points * 2;
  }
  score += points;
  $("#score").html("SCORE: " + score);
}

// updates word_display
function displayWord(letter) {
   word_display =  word_display + letter;
   $("#word_display").html("WORD: " +  word_display);
}

// updates tile_left counter
function tilesRemaining() {
  $("#tiles_left").html("Tiles left: " + tileCount);
}

/*
func randomly generates tiles using data [] and stops used up tiles from reappearing
*/
function generateTiles(num_Tile) {
  for (var i = 0; i < num_Tile; i++) {
      randomLetter = randomProperty(tiles)["letter"]
      randomTile = tiles[randomLetter]["img"]
      tiles[randomLetter]['number-remaining'] -= 1
      if (tiles[randomLetter]['number-remaining'] == 0) {
          delete tiles[randomLetter];
      }
      $("#rack #playerTiles").append("<li id='" + randomLetter + "'>" + randomTile + "</li > ");
      tileCount--;
  }
}

/*
credit: https://stackoverflow.com/a/5848800
func lets first tile be droppable, until a tile is dropped on it, iterates to next tile
*/
function setUpDragDrop() {
  tilesRemaining();
  $("#scrabble-container li").droppable();
  $("#tile" + '0').droppable('enable')
  for (var i = 1; i < 7; i++) {
      $("#tile" + i).droppable('disable')
  }
  $('#rack li').droppable('disable');
  /* bounce back to rack if placed somewhere it's not suppose to be */
  $("#rack li").draggable({
      revert: function (event, ui) {
          $(this).data("uiDraggable").originalPosition = {
              top: 0,
              left: 0
          };
          return !event;
      }
  });
}

$(function () {

  // #rack tiles made to be draggable
  // https://jqueryui.com/draggable/
  $("#rack li").draggable({
      revert: function (event, ui) {
          $(this).data("uiDraggable").originalPosition = {
              top: 0,
              left: 0
          };
          return !event;
      }
    });

  // dropped tiles no longer draggable; adds scoring
  // credit: https://stackoverflow.com/a/26614596
  $("#scrabble-container li").droppable({
      drop: function (event, ui) {
          $("#tile" + index).droppable('disable');
          index += 1;
          $("#tile" + index).droppable('enable');
          var $this = $(this);
          var draggable = ui.draggable;
          ui.draggable.draggable({disabled: true});
          letter = draggable.attr('id')
          displayWord(letter)
          var points = data[letter]['value'];
          updateScore(points);
          console.log(data[letter])
          ui.draggable.position({
              my: "center",
              at: "center",
              of: $this,
              using: function (pos) {
                  $(this).animate(pos, 200, "linear");
              }
          });
      }
  });
});

// generate 7 tiles & setup draggable/droppable
generateTiles(7);
setUpDragDrop();


// refreshes the page; the data is not stored, therefore refresh acts as a reset
function restart() {
  window.location.reload();
}

// refresh the board by deleting the classes that had draggable disabled, then setup for the next round.
function submit() {
  index = 0;
  // credit: https://stackoverflow.com/a/46424870
  document.querySelectorAll(".ui-draggable-disabled").forEach(e => e.remove());
  generateTiles(word_display.length);
  setUpDragDrop();
  word_display = "";
  $("#word_display").html("WORD: " +  word_display);
}
