'use strict'

let Array2D =  require('array2d')

let grid = Array2D.build(10, 20, 0)

console.log(grid)

let I = [
  [0,0,0,0],
  [1,1,1,1],
  [0,0,0,0],
  [0,0,0,0]
]

console.log(I)

/*
debounce step only if collision in next frame
also check collision for horizontal 

1. step event fired: "drop" and check for collision
2. rotation: 
*/