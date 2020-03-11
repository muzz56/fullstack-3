

function myCapitals(string){

  string = string.split(' ');

  console.log(string)

  for(var i = 0, x = string.length; i < x; i++){
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }

  return string.join();

}

console.log(myCapitals('the quick brown fox'));

