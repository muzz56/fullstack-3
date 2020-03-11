

function max(x, y, z) 
 {
  var a = 0;
  if (x > y)
  {
    a = x;
  } else
  {
    a = y;
  }
  if (z > a) 
  {
    a = z;
  }
  return a;
}


console.log(max(23,10,100) + ' is the largest');
