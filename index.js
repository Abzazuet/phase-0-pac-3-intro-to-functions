// Follow along with the examples here
function doNothing(){
}
function sayHelloTo(firstName) {
	console.log(`Hello, ${firstName}!`);
}
function say(greeting, firstName){
	console.log("firstName: ",firstName);
	console.log("greeting: ",greeting);
	console.log(`${greeting}, ${firstName}!`);
}
function add(x, y){
	return x+y;
}
sayHelloTo("Julia");
sayHelloTo("Abel");
sayHelloTo("Tere");
say("'Sup","Abel");
console.log(add(5, 5));
