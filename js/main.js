"use strict";

// 1. Create a 4x4 gBoard Matrix containing Objects.
//     Place 2 mines manually when each cell’s isShown set to true.
//
// 2. Present the mines using renderBoard() function.
const WALL = "#";
const CELL = "X";
const FLOOR = "@";

var gBoard;
var gLevel = 4;
var gGame;

function initGame() {
  console.log("hello");
  gBoard = buildBoard(gLevel);
   renderBoard(gBoard, '.board-container');
}

function buildBoard(size) {
  var SIZE = size;
  var board = new Array(4);
  var cell = {
    minesAroundCount: 0,
    isShown: false,
    isMine: false,
    isMarked: false,
  };
  for (var i = 0; i < board.length; i++) {
    board[i] = new Array(4);
    for (var j = 0; j < board.length; j++) {
      board[i][j] = CELL;

      if (
        i === 0 ||
        i === SIZE - 1 ||
        j === 0 ||
        j === SIZE - 1 ||
        (j === 3 && i > 4 && i < SIZE - 2)
      ) {
        board[i][j] = WALL;
      }
    }
  }
  return board
} 
function renderBoard(mat, selector) {
  
    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < mat.length; i++) {
      strHTML += '<tr>';
      for (var j = 0; j < mat[0].length; j++) {
        var cell = mat[i][j];
        var className = 'cell cell' + i + '-' + j;
        strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
      }
      strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML += strHTML;
  }


function setMinesNegsCount(board) {
  var currCell = cell[i][j];
  var shownCellCounter = 0; 
    for(var i = 0 ; i   ){
      
    }
   
   
   
    // if (cell.isShown === true) {
    //  shownCellCounter++;


   }


}

function cellClicked(elCell, i, j) {
  if(cell.isMine === false){
    cell.isShown = true;

  }
}

function cellMarked(elCell) {}

function checkGameOver() {}

function expandShown(board, elCell, i, j) {}

function createLevel(size, mineNum) {}
