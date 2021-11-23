function logRectInfo(topLeft, bottomRight){
    a = (topLeft[1] - bottomRight[1]) * (bottomRight[0] - topLeft[0]);
    p = ((topLeft[0] + bottomRight[0]*4));
    console.log(`Area is ` + a);
    console.log(`Perimeter is ` + p);
  }
  logRectInfo([0,5], [3,2]);
  logRectInfo([0,10], [6,1]);