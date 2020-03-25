let uc = require("upper-case");

console.log(uc.upperCase("string"));

function greeter(){
	for(var i = 0; i <= 10; i++){
		console.log(uc.upperCase("hello world"));
	}
}

greeter();