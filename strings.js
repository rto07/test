const firstname = 'Jim';

const uppercase = 'Jim'.toUpperCase();
//one use would be for when users are logging into a website

"Hello, world".replace('Hello', 'goodbye',); 

const hello = 'hellooo';
const world = 'worldddd';
hello + world;
"Hello, " + "World"

//change a string into a number
parseInt("123");


//new to javascript
//sting interpolation / template strings 
//can find a ` above tab key

const name = 'jim'
const template = `Hello ${name}, welcome to the cosmos`;

let firstName = 'barry';






function checkAge(age){
	
	const age = prompt('age')

	if(age > 20) {
		console.log('you're old)
	} else{
		console.log('no soup for you')
	}
}


//loop down from 50 and when you reach 21 ask the user, if they are thirsty
//print their response to console


for (let i = 50; i >= 21; i --) {
	if (i === 21) {
		const thirstiness = prompt ('are you thirsty');
		console.log(thirstiness)
	}
}