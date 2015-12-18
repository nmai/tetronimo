'use strict'
let array2d =  require('array2d')

let grid = []

for (let i = 0; i < 20; i++) {
  let row = []
  for (let j = 0; j < 10; j++) {
    row.push(0)
  }
  grid.push(row)
}

console.log(grid)
