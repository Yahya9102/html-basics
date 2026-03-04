




/*

async function sendUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Skor",
            body: "Svarta skor",
            shoeId: 1
        })
    });

    const result = await response.json();
    console.log(result)
}

sendUser()

*/




const button = document.querySelector("#loadBtn");
const list = document.querySelector("#userList");


button.addEventListener("click", async function() {
    button.textContent = "Laddar..."
    try {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const users = await response.json()


    button.textContent  = "Ladda användare"

    list.innerHTML = "";

    users.forEach(function(user) {
        const li = document.createElement("li");
        li.textContent = user.name;
        list.append(li)
    });
    } catch(error) {
        console.log("Error:", error)
    }
})






/*
Modern way of writing fetch calls
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data)
} 

getUsers()

*/




/*
    Old school way of writing fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data)
})

*/






/*
const form = document.querySelector("#myForm");
const input = document.querySelector("#nameInput");
const output = document.querySelector("#output");


form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("formuläret skickad")
})
*/


/*
const title = document.querySelector("#title");
const button = document.querySelector("#changebtn");

button.addEventListener("click", function(){
    title.style.color = "red";
    title.textContent = "Jag ändrade färg!"

})

*/


/*

const button = document.querySelector("#btn")
function add(a, b) {
    const result = a + b;
    console.log("Result", result)
}

button.addEventListener("mouseover", function () {
    add(5,5)
})

*/






/*
const myList = document.querySelector("ul");
const myNewListItem = document.createElement("li");
const elementToRemove = document.querySelector("#main-text");


myNewListItem.innerText = "Andra"
myList.append(myNewListItem)


elementToRemove.remove()
*/


/*
// CSS CHANGES VIA JAVASCRIPT

const title = document.querySelector("#main-title");
title.style.color = "green"
title.style.textAlign = "right"
title.style.fontSize = "3rem"
*/



/* Get by class returns a collection of elements
// const mainText = document.getElementsByClassName("main-text")


/*for (let i = 0; i < mainText.length; i++){
    mainText[i].textContent = "Nej"
}
// mainText.textContent = "Nej!"
*/


/*

const firstLi = document.querySelector("li")
const allLis = document.querySelectorAll("li")
// 
allLis. FOR LOOP NEEDED TO GO THROUGH THIS!

firstLi.textContent = "3"

*/



