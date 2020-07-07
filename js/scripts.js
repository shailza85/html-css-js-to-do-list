function ButtonClick_InputText()
{
    var inputText = document.getElementById("newtask").value;
      
    document.getElementById('box1').innerHTML="<p>" +inputText+ "</p>";

}

/*function AddTask_List()
{
    var text = document.querySelector("taskInsert");
    var addtime =new Date();
    var startstr = addtime.toLocaleDateString();
    text.innerHTML+= "Start" + ":" + startstr + inputText + "<br/>"
}*/