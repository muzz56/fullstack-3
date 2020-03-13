const colors = ['red', 'green', 'blue'];

function capitalizedColors(color){
  
 // color.map(x => x[0].toUpperCase() + x.substr(1));
  return color.map(x => x[0].toUpperCase() + x.substr(1))
   
}

console.log(capitalizedColors(colors));