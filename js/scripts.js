
const list = document.querySelector("ul");
const addTask = document.querySelector("chkbox");
const para = document.querySelector("p");
const frm = document.querySelector("form");
const inputButton = document.getElementById("addInput");
const comptTask = document.querySelector("compTask");
const error = document.getElementById("listError");
const input = document.getElementById("newtask");

let inputText;
let addedText;
let compPara;
let listArr = [];


inputButton.addEventListener("click", function() {
    //function ButtonClick_InputText() {


        // @link https://www.w3schools.com/js/js_dates.asp
        // @link https://stackoverflow.com/questions/27869606/remove-time-from-gmt-time-format
        // @link https://github.com/TECHCareers-by-Manpower/js-practice/commit/b5822168f20a8a98c20095728bd7af71175cbbeb
        var newDate = new Date().toLocaleString();
        var dateTime = newDate;
        let inputText = document.getElementById("newtask").value;
        let newItem = document.createElement("li");
        newItem.innerHTML = inputText + " " + "<b>" + "Start:" + "</b>" + " " + dateTime;
        list.appendChild(newItem);


        let inputError = false;
        if (inputText.trim() === "") {
            error.innerText = "Sorry, no item is enetered. Please type in to add an item.";
            inputError = true;
        }

        if (listArr.includes(inputText.trim().toLowerCase())) {
            
            error.innerText = "Sorry, the item already exists.";

            inputError = true;

        }

        if (inputText.trim() !== "" && !listArr.includes(inputText.trim().toLowerCase()))

            if (!inputError) {
                error.innerText = "";


                listArr.push(inputText.trim().toLowerCase());

                if (list.className === "emptyList") {
                    list.classList.remove("emptyList");
                    list.children[2].remove();

                }

            }
    //}
          input.value ="";
          input.focus();  
      event.preventDefault();
}
);
function AddTask_List()
 {


    /*let inputError1 = false;
    if (list.children[2]===inputText) {
        error.innerText = "Sorry, duplicate item is enetered. Please add a new item.";
        inputError1 = true; }*/

    compTask.appendChild(list.children[2]);
 }
