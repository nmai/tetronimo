var paper = require('paper')

var grid = [ 
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ],
  [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0 ],
  [ 0, 0, 1, 0, 1, 0, 1, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0, 1, 1, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]

for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
        var color = 'white'
        if (grid[i][j] > 0)
            color = 'black'
        
        new Path.Rectangle({
          point: [j * 10, i * 10],
          size: [10, 10],
          fillColor: color
        });
    }
}

// use NaiveShuffle to generate sets