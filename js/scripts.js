
const list = document.querySelector("ul");
const addTask = document.querySelector("chkbox");
const para = document.querySelector("p");
const frm = document.querySelector("form");
const PBox1 = document.querySelector("box1");
const comptTask = document.querySelector("compTask");
//const inputText=document.querySelector("newTask");

let inputText;
let addedText;
let compPara;
let listArr = [];



function ButtonClick_InputText() {


    // @link https://www.w3schools.com/js/js_dates.asp
    // @link https://stackoverflow.com/questions/27869606/remove-time-from-gmt-time-format
    var newDate = new Date().toLocaleString();
    var dateTime = newDate;
    let inputText = document.getElementById("newtask").value;
    let addedText = document.getElementById('box1').innerHTML = "<p>" + inputText + " " + "<b>" + "Start:" + "</b>" + " " + dateTime + "</p>";

    let inputError = false;
    if (inputText.value.trim() === "") {
        error.innerText = "Sorry, please add an item.";
        inputError = true;
    }

    if (listArr.includes(inputText.value.trim().toLowercase())) {
        error.innerText = "Sorry, the item already exists.";
        inputError = true;
    }

    if (inputText.value.trim() !== "" && !listArr.includes(inputText.value.trim().toLowercase()))

        if (!inputError) {
            error.innerText = "";


            listArr.push(inputText.value.trim().toLowercase());

            if (list.className === "emptyList") {
                list.classList.remove("emptyList");
                list.children[0].remove();
            }
            inputText.value = "";
            inputText.focus();
        }


}

function AddTask_List() {
    cmTask = document.getElementById('compTask').innerHTML = addedText;
}




