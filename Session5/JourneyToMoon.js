// n is the number of astronauts
// astronaut is the pairs of the astronauts that belongs to the same country
// => [[0,1], [2,3]]

/*
5 3
0 1
2 3
0 4

5,
[[0,1], [2,3], [0,4]]
*/


/**
  {
    0: [1, 4],
    1: [0],
    2: [3],
    3, [2],
    4: [0]
  }
  
  coutry = [3, 2]
  3 * 2 = 6
  
*/

/**


4 1
0 2


  {
    0: [2],
    1: [],
    2: [0],
    3, []
  }
  
  coutry = [[0, 2], [1], [3]] = [2, 1, 1]
  
 0-1 : 2 * 1
 0-2:  2 * 1
 1-2 : 1 * 1
 var res = 0;
 for (var i=0; i<country.length; i++) {
    res += county[i] 
 }
  
  C12 = 2*1/1*1
  C11 = 1;
  
*/


function journeyToMoon(n, astronaut) {
    if (n < 1) {
      return 0;
    }
    var pairs = {};
    for (var i=0; i<n; i++) {
      pairs[i] = [];
    }
    for (var i=0; i<astronaut.length; i++) {
      var curr = astronaut[i];
      pairs[curr[0]].push(curr[1]);
      pairs[curr[1]].push(curr[0]);
    }

    var groups = grouping(n, pairs);
    return getNumOfComb(n, groups);
}

function grouping(n, pairs) {
  var groups = [];
  var queue = [];
  var visited = {};
  
  for (var i=0; i<n; i++) {
    var size = 0;
    if (visited[i]) {
        continue;
    }
    queue.push(i);
    while (queue.length > 0) {
      var curr = queue.shift();
      if (visited[curr]) {
        continue;
      }
      visited[curr] = true;
      var pbtsc = pairs[curr];
      for(var i=0; i<pbtsc.length; i++) {
        queue.push(pbtsc[i]);
      }
      size++;
    }
    groups.push(size);
  }

  return groups;
}

function getNumOfComb(n, groups) {
  var numOfPairs = 0;
  var numberOfP = n;
  for (var i=0; i<groups.length; i++) {
    numOfPairs += groups[i] * (numberOfP-=groups[i]);
  }
  return numOfPairs;
}


journeyToMoon(4, [[0,2]]);
