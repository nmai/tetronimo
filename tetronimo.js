'use strict'
let array2d =  require('array2d')

let grid = new Array(20)
grid = grid.map(function () {
	let row = []
	for (let i = 0; i < 10; i++) {
		console.log('hello')
		row.push(0)
	}
	return row
})

console.log(grid)
