function matrix(g, t) {
  let firstVal = t[0][0];
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < t[i].length; j++) {
      if (g[i][j] == firstVal) {
        const result = help(g, t, i, j);
        if(result) {
          return true;
        } else {
          return false;
        }
      } 
    }
  }
} 

function help(g, t, x, z) {
  let pos = z;
  for(let i = 0; i < t.length; i++) {
    for(let j = 0; j < t[i].length; j++) {
      if(g[x][z] == t[i][j]) {
        z++;
        continue;
      } else {
        return false;
      }
    }
    z = pos;
    x++;
  }
  return true;
}

console.log(
  matrix(
    [[24, 54, 23, 54], 
     [11, 54, 12, 54], 
     [23, 124, 14]
    ],
    [[54, 23, 54], 
     [54, 12, 54]
    ]
  )
);