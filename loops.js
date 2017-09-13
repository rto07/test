//loops

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
};

for (let i = 0; i < arr.length; i++) {
	if(arr[i] % 2 === 0) {
		console.log(arr[i] + " is even");
	} else {
		console.log(arr[i] + " is odd");
	}
};

//now write a loop that will empty the array and leave a message of
//each item leaving the array on each iteration of the loop


const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i += 1) {
	if(arr[i] )
	console.log("One is leaving the array");
}