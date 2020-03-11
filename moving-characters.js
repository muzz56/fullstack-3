function movingChars(string) {
     if (string.length > 1)
       {
         return string.slice(-3) + string.slice(0, -3);
       }
  return string;
}
console.log(movingChars("Python"));
console.log(movingChars("Fullstack"));
