/*
await async function test(){
    return "Hej"
}

// Promise {"Hej"}

*/









// callback

/*
console.log("Start")

setTimeout(function() {
    console.log("Timeout");
}, 1000)

console.log("Slut")

*/

// Callback hell
/*
doSomething(function(result1) {
    doSomethingElse(result1), function(result2) {
        doThingThing(result2), function(result3){
            console.log(result3)
        }
    }
})
*/


// new modern way of writing Promise

/*
fetchData()
    .then(result => console.log(result))
    .then(result1 => console.log(result1))
    .then(result2 => console.log(result2))
    .catch(error => console.log(error))





const myPromise = new Promise(function(resolve, reject){
    let success = true;
    if (success){
        resolve("Allt gick bra")
    } else {
        reject("Något gick fel")
    }
})

myPromise
    .then(function(result){
        console.log(result)
    })
    .catch(function(error){
        console.log(error)
    })


*/

// Arrrow function

/*
function add(a, b){
     return a + b
    }

const add = (a, b) => a + b;
*/





// Event loop
// Mekaniskmen som kollar om Call stack är tom, flyttar funktioner från queues till stacken
/*

Logiken fungerar som nedan
while(true):
    if stack är tom
    Kör alla microtasks
    Kör alla macrotask
*/



// Macrotask Queue (vanliga kö)
// Dessa hamnar under Macrotask
// setTimeout, setInterval, Dom events
/*
setTimeout(function() {
    console.log("Timeout");
}, 1000)
*/



// Microtask Queue (högre prio)
 // Dessa hamnar under microtask
//queueMicrotask, finally, fetch


/*
Promise.resolve().then(function() {
    console.log("B")
})
*/



// Promise.then





// synkron
// -> anrop väntar på svar


console.log("Start")

setTimeout(function() {
    console.log("Timeout");
}, 1000)


// Inloggningsida

// Användaren är inloggad

// Användaren uppdaterar Email

// Ni visar uppdaterade mailet

// 




console.log("slut")


// asynkron
// -> anrop går vidare




/*

function second(){
    console.log("Hej")
}

first()
*/



/*
Switch cases


let a = 2 + 3;

switch (a) {
    case 3: 
        console.log("Too small")
        break;
    case 4: 
        console.log("Too small")
        break;
    case 5: 
        console.log("Match")
        break;
    default:
        console.log("Det matchar inte våra värden")
    }



*/




/*
LOOPS IN

for (let i = 0; i < 3; i++){
    console.log(i)
}




let i = 0;

while (i < 3) {
    console.log(i)
    i++
}


let j = 0;

do {
    j++
    console.log(j)
} while (j < 3)
*/


/*

let age = 19;


if (age > 21) {
    console.log("You´re allowed to drink")
} else {
    console.log("You´re too young")
}


// ternary operator (Mini if sats)
let drink = age >= 21 ? "Beer" : "Juice";

console.log(drink)

*/



/*
let x = parseInt("1" + 2)
console.log(x)

console.log(typeof(x))


/** ALLa siffror i JavaScript är "double" i grunden
console.log(3/2)

console.log(Math.floor(3/2))

console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)

 */
/*
// = Tilldelning
let x = 12;


// == "Som jämförelse" (MEN den kan konvertera typer)
console.log(x == 12);
console.log(x == "12");


// === Som  STRIKT jämförelse (Värde + datatyp)
console.log(x === "12");
console.log(x === 12);

*/



// Datatyper
/*
String
Number
Boolean
Undefined
Null
Object


const name = "Yahya";
const age = 35;
const isTeacher = true;
let notSetYet;
const empty = null;
const person = {name: "Yahya", age: 30}

// DONT DO THIS CONFUNSING!
const list = [1,"Yahya",true]

// Have the same type
const correctList = [1,2,3]


const hej = null;

console.log(hej)

*/



/*
// Let är fluid vilket betyder att den kan komma att ändras
let name = "Yahya";
name = 4
name = false


const birthYear = 1991;
const isStudent = true;
const studentName = "Yahya";


console.log(birthYear)
birthYear = 2025
console.log(birthYear)
*/




