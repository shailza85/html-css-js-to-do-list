
const list = document.querySelector("ul");
const inputButton = document.querySelector("#addInput");
const comptTask = document.querySelector("compTask");
const error = document.querySelector("#listError");
const input = document.querySelector("#newtask");
const delButton = document.querySelector("#deletebutton");
const delButton1 = document.querySelector("#deletebutton1");
const addedTask = document.querySelector("#addTask");
const compTaskDiv= document.createElement("input");



let inputText;
let listArr = [];


inputButton.addEventListener("click", function () {
    // @link https://www.w3schools.com/js/js_dates.asp
    // @link https://stackoverflow.com/questions/27869606/remove-time-from-gmt-time-format
    // @link https://github.com/TECHCareers-by-Manpower/js-practice/commit/b5822168f20a8a98c20095728bd7af71175cbbeb
    
    
    var newDate = new Date().toLocaleString();
    var dateTime = newDate;


    inputText = document.querySelector("#newtask").value;

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


            //let chBox=document.createElement("input");  // @link https://stackoverflow.com/questions/866239/creating-the-checkbox-dynamically-using-javascript
            // chBox.type="checkbox";
            //chBox.name="checkbox1";
            //chBox.value="checkbox";
            //chBox.id="checkbox1";



            //@link https://stackoverflow.com/questions/41440446/dynamically-create-delete-buttons

            //let buttonDel =document.createElement("button"); 
            //buttonDel.type="button";
            //buttonDel.name="delete";
            // buttonDel.value="delete";
            // buttonDel.id="delete";



            let newItem = document.createElement("li");
            newItem.innerHTML = inputText.trim() + " " + "<b>" + "Start:" + "</b>" + " " + dateTime;

            listArr.push(inputText.trim().toLowerCase());

            // list.appendChild(chBox);

            // list.appendChild(buttonDel);

            //if (list.className === "emptyList") {
            //list.classList.remove("emptyList");
            //list.children[2].remove();

            // }
            list.appendChild(newItem);
            input.value = "";
            input.focus();  
            
            if(true)
          { 
              console.log("test1123");          
            compTask.appendChild(list.children[2]);            
           }
                        
        }        
    
    event.preventDefault();
}
);

/*function AddTask_List() {

 compTask.appendChild(list.children[2]);
   
}*/



// @ link https://github.com/TECHCareers-by-Manpower/js-practice/blob/master/Image%20Gallery/js/scripts.js

delButton.addEventListener("click", () => {

    list.children[2].remove();

});

delButton1.addEventListener("click", () => {

    compTask.children[0].remove();
    

});






