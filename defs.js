'use strict'

// really advanced shit right here
// webpack / browserify / requirejs was so 2012

// dat global enum
const COLORS = {
  0: 'none',
  1: 'red',
  2: 'blue',
  3: 'green'
}

const PIECES = {  
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