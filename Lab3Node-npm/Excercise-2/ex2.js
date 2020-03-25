let moment = require("moment");

//var getCurrentDate = function() {
//	var wrapped = moment(new Date());
//	console.log(wrapped);

//} 

//getCurrentDate();

//ES6 Syntax

const getCurrentDate = () => moment (new Date());
console.log(getCurrentDate().format('dddd') + "," + getCurrentDate().format(' MMMM Do YYYY : h:mm:ss a'));

//console.log(moment().format('LLLL'));