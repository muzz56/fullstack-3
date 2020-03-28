const comparer = require('./modules/comparer');
const { Add, Subtract } = require('./modules/calculator');

function run(x,y){
    if(comparer.AreNumberEqual(x,y)){
        console.log(`adding two number ${x},${y} \n${Add(x,y)}`)
        
    }
    else console.log(`subtracting two number ${x},${y} \n${Subtract(x,y)}`)
}

run(5,2);