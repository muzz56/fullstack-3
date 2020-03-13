

var nums = [1 , 60, 36, 30, 20, 56, 5, 10];

function calculateSum(num){
  
  return nums.reduce((total, x) => total + x)
   
}

function calculateProd(num){
  
  return nums.reduce((total, x) => total * x)
   
}

console.log(calculateSum(nums));
console.log(calculateProd(nums));
