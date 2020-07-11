
const list = document.querySelector("ul");
const inputButton = document.querySelector("#addInput");
const comptTask = document.querySelector("compTask");
const error = document.querySelector("#listError");
const input = document.querySelector("#newtask");
const delButton = document.querySelector("#deletebutton");
const delButton1 = document.querySelector("#deletebutton1");
const addedTask = document.querySelector("#addTask");
const compTaskchkbox = document.createElement("input");

let listArr = [];


inputButton.addEventListener("click", function () {
    // @link https://www.w3schools.com/js/js_dates.asp
    // @link https://stackoverflow.com/questions/27869606/remove-time-from-gmt-time-format

    var newDate = new Date().toLocaleString();
    var dateTime = newDate;
    let inputText = document.querySelector("#newtask").value;

    // @link https://github.com/TECHCareers-by-Manpower/js-practice/commit/b5822168f20a8a98c20095728bd7af71175cbbeb
    //Code borrowed for concept of addind error messages, adding lists and items
    let inputError = false;
    if (inputText.trim() === "") {
        error.innerText = "Sorry, no item is entered. Please type in to add an item.";
        inputError = true;
    }

    if (listArr.includes(inputText.trim().toLowerCase())) {

        error.innerText = "Sorry, the item already exists. Please ensure you are adding a new item.";
        inputError = true;
        input.value = "";
    }

    if (inputText.trim() !== "" && !listArr.includes(inputText.trim().toLowerCase()))

        if (!inputError) {
            error.innerText = "";

            let newItem = document.createElement("li");
            newItem.innerHTML = inputText.trim() + " " + "<b>" + "Start:" + "</b>" + " " + dateTime;

            listArr.push(inputText.trim().toLowerCase());
            list.appendChild(newItem);
            input.value = "";
            input.focus();
        }

    event.preventDefault();
}
);

// @ link https://github.com/TECHCareers-by-Manpower/js-practice/blob/master/Image%20Gallery/js/scripts.js
// Code borrowed to get the concept of EventListner function

delButton.addEventListener("click", () => {
    if(true) {
    list.children[2].remove();
    //let remActive=document.querySelector("#addTask > ul > li");
    //remActive.remove();
   } 
});

function AddTask_List() {

    compTask.appendChild(list.children[2]);
    // @link https://stackoverflow.com/questions/866239/creating-the-checkbox-dynamically-using-javascript
    //Creating dynamic checkboxes
    let chBox = document.createElement("input");
    chBox.type = "checkbox";
    chBox.name = "checkbox1";
    chBox.value = "checkbox";
    chBox.id = "checkbox1";
    chBox.disabled = "true";

    compTask.appendChild(chBox);
    
}

delButton1.addEventListener("click", () => {
    let remChBox = document.querySelector("#checkbox1");
    let remLi = document.querySelector("#compTask > li");
    if (true) {
        remLi.remove();
        remChBox.remove();
        }
});






