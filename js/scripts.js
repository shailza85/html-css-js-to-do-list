
const list = document.querySelector("ul");
const inputButton = document.querySelector("#addInput");
const cTask = document.querySelector("#cTask > ul");
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

    list.children[1].remove();

});

function AddTask_List() {


    // @link https://stackoverflow.com/questions/866239/creating-the-checkbox-dynamically-using-javascript
    //Creating dynamic checkboxes
    let chBox = document.createElement("input");
    chBox.type = "checkbox";
    chBox.name = "checkbox1";
    chBox.value = "checkbox";
    chBox.id = "checkbox1";
    chBox.checked = "true";
    chBox.disabled = "true";

    cTask.appendChild(chBox);
    cTask.appendChild(list.children[1]);

}


delButton1.addEventListener("click", () => {
    let remChBox = document.querySelector("#checkbox1");
    let remLi = document.querySelector("#cTask>ul>li");
    if (true) {
        remLi.remove();
        remChBox.remove();
        remLi.removeEventListener("click", function () { });
    }
});







