function angleName(angle) {
  if(angle < 90) {
    return "Acute Angle";
  }
  if(angle === 90) {
    return "Right Angle";
  }
  if(angle < 180) {
    return "Obtuse Angle";
  }
  return "Straight Angle";
}

console.log(angleName(56))
console.log(angleName(180))
