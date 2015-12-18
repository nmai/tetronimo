'use strict'

let Array2D =  require('array2d')

let grid = Array2D.build(10, 20, 0)

console.log(grid)

let COLORS = {
  0: 'none',
  1: 'red',
  2: 'blue',
  3: 'green'
}

let I = [
  [0,0,0,0],
  [1,1,1,1],
  [0,0,0,0],
  [0,0,0,0]
]

let L = [
  [0,0,1],
  [1,1,1],
  [0,0,0]
]

let J = [
  [1,0,0],
  [1,1,1],
  [0,0,0]
]

let S = [
  [1,1,0],
  [0,1,1],
  [0,0,0]
]

let Z = [
  [0,1,1],
  [1,1,0],
  [0,0,0]
]

let O = [
  [1,1],
  [1,1]
]

let T = [
  [0,1,0],
  [1,1,1],
  [0,0,0]
]

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