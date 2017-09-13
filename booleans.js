// Boolean

let doorsOpen = true;

doorsOpen = false;

doorsOpen = !doorsOpen;

1 > 2
1 < 2
1 >= 2
1 <= 2
1 == 1
//triple equals is more strict, even checks type (reach for this one)
1 === 1



//conditionals

let a = 1 
if(a > 2){
console.log(a + 'is > 2')
} else {
console.log(a + ' is less than 2')
}

if (a > 2){
//some code
}else if (a === 2){
//some code
}else {
//some code
}


// Operators (and) && and (or) ||

5 === 5 && 10 === 10 --> //evaluates to true for the && operator
5 === 4 && 10 === 10 --> //evaluates to false for the && operator

5 === 5 || 4 > 6 --> //if one is true than it is all true

null || 5;
null || 5 === 5 --> //evaluates to true because of 5 === 5
null || 0;

const input = '';
const username = input || "jwefkjabskfjb";