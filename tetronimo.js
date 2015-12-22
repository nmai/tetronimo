'use strict'

let grid = Array2D.build(10, 20, 0)
let canvas = document.getElementById('grid-canvas')
let testGrid = GRID_EXAMPLE

function flipBits () {
  testGrid = Array2D.upan(testGrid)
}

// side length of squares
const s = 20

const ctx = canvas.getContext('2d')

// generate a set of pieces
let currentSet = shuffle(Object.keys(PIECES)).map((id) => {return PIECES[id]})
let currentPiece = currentSet[0]

function randomPiece () {
  return currentSet[Math.floor(Math.random() * currentSet.length)]
}

let posX = 4
let posY = 4

function draw () {

  Array2D.eachCell(testGrid, (cell, i, j) => {
    if (cell === 0) {
      ctx.clearRect( j * s, i * s, s, s)
    } else {
      ctx.fillStyle = COLORS[cell]
      ctx.fillRect( j * s, i * s, s, s)
    }
  })

  Array2D.eachCell(currentPiece, (cell, i, j) => {
    if (cell !== 0) {
      ctx.fillStyle = COLORS[cell]
      ctx.fillRect( (j + posX) * s, (i + posY) * s, s, s)
    }
  })

  // ctx.clearRect(45,45,60,60)
  // ctx.strokeRect(60,60,100,100)

  requestAnimationFrame(draw)
}

draw()

// start flipping bits independently of the draw loop:
setInterval(flipBits, 500)


/*
debounce step only if collision in next frame
also check collision for horizontal 

1. step event fired: "drop" and check for collision
2. rotation: 
*/

/*
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillRect(20,20,150,100);
*/

/*
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);
  }
}
*/