'use strict'

let Array2D =  require('array2d')

let grid = Array2D.build(10, 20, 0)

console.log(grid)

let COLOR = {
  0: 'none',
  1: 'red',
  2: 'blue',
  3: 'green'
}

let PIECE = {  
  I: [ [0,0,0,0],
       [1,1,1,1],
       [0,0,0,0],
       [0,0,0,0]
     ],

  L: [ [0,0,1],
       [1,1,1],
       [0,0,0]
     ],

  J: [ [1,0,0],
       [1,1,1],
       [0,0,0]
     ],

  S: [ [1,1,0],
       [0,1,1],
       [0,0,0]
     ],

  Z: [ [0,1,1],
       [1,1,0],
       [0,0,0]
     ],

  O: [ [1,1],
       [1,1]
     ],

  T: [ [0,1,0],
       [1,1,1],
       [0,0,0] 
     ]
}

let def = function () {
  this.x = 1
  this.y = 2
}

let a = new def()

a.x = 3

let b = new def()

b.x = 4

console.log(a.x + ' ' + b.x)

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