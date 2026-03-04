const form = document.querySelector("#contactForm")
const statusDiv = document.querySelector("#status")

const loadBtn = document.querySelector("#loadMessages")
const list = document.querySelector("#messageList")

loadBtn.addEventListener("click", async () => {
    const response = await fetch ("http://localhost:8080/api/messages")
    
    const messages = await response.json()
    
    list.innerHTML = "";

    messages.forEach(msg => {
        const li = document.createElement("li")
        
        li.className = "list-group-item";
        
        li.textContent = msg.name + " (" + msg.email + "): " + msg.message;
        
        list.append(li);

    })

})



form.addEventListener("submit", async (event) => {
    event.preventDefault()


    const data = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    try {

        const response = await fetch("http://localhost:8080/api/messages", {

            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)

        });

        const result = await response.json();


        statusDiv.className ="alert alert-success";

        statusDiv.textContent = "Sparat med id: " + result.id;
        form.reset()

    } catch (error) {
        statusDiv.className = "alert alert-danger";
        statusDiv.textContent = "Fel vid anrop.";
    }


})









// EVERYTHING BELOW IS ABOUT LOCALSTORAGE

/*
Convert from JavaScript object to JSON
const person = {name: "Yahya", age: 35};
const json = JSON.stringify(person)
localStorage.setItem("person", json)
*/

/*Parse back to JavaScript from JSON
const storedName = localStorage.getItem("person")
const parsed = JSON.parse(storedName)
console.log(storedName)
*/

/*


const input = document.querySelector("#nameInput");
const button = document.querySelector("#saveBtn");
const output = document.querySelector("#output");

button.addEventListener("click", function() {
    const value = input.value;
    localStorage.setItem("username", value);

    output.textContent = "Sparat!"
})


*/

/*localStorage.setItem("name","Yahya");
console.log(localStorage.getItem("age"))
// Check if not null and NOT undefined
if (localStorage.getItem("age") != null) {
    
}

*/