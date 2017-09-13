// arrays

const arr = [1, 2, 3];

arr.length

console.log(arr[0]);

arr[1] = 4  //this allows you to change on of the values w/in the array

arr.push(1) --> //adds object to the end of the array

arr.pop() --> //removes something from end of the array

arr.unshift('something') --> //puts item at the beginning

arr.shift('something') --> //removes item from beginning

arr.reverse() --> //flips the array around



// +=
// a = a + 1

// -=
// a = a - 1

// /=
// a = a / 1

// *=
// a = a * 1

// %=
// a = a % 1


//{} object

const turtle = {
	name: 'martin',
	age: 102,
	hungry: true,
};

// const turtle = {
// 	name: 'martin',
// 	age: 102,
// 	hungry: true,
// };
// undefined
// turtle.name
// "martin"
// turtle.age
// 102
// turtle.name = 'merdle the turtle'
// "merdle the turtle"
// turtle
// {name: "merdle the turtle", age: 102, hungry: true}
// turtle['hungry'] = false;
// false
// turtle
// {name: "merdle the turtle", age: 102, hungry: false}

const bird = {};
bird.name = 'dee'; --> //quick way to add properties

//make 2 objects w/ 5 properties, access each property in the console
//first object you'll make like the 1st example
//second object you'll make like the second example
const car = {
	year: 2005,
	make: 'toyota',
	model: 'scion tc',
	mileage: 25,
	color: 'black',
	gasLevel: 'Low',
}