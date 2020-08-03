
var todoitems=document.getElementById("todoitems");
function addtodo(){
    var todo=document.getElementById("todo-input")
    var list=document.createElement("li");
    var list_text=document.createTextNode(todo.value);
    list.appendChild(list_text);
    todoitems.appendChild(list);
    todo.value="";
    var delbtn=document.createElement("button");
    var delbtn_text= document.createTextNode("Delete");
    delbtn.appendChild(delbtn_text);
    delbtn.setAttribute("class","btn btn-danger ");
    delbtn.setAttribute("onclick","tododel(this)")
    list.appendChild(delbtn);
    

    //create edit button 

    var editbtn=document.createElement("button");
    var editbtn_text=document.createTextNode("Edit");
    editbtn.appendChild(editbtn_text);
    list.appendChild(editbtn);
    editbtn.setAttribute("class","btn btn-dark ");
    editbtn.setAttribute("onclick","edittodo(this)");
   

    
   

    
}

function tododel(e){
  e.parentNode.remove();
}

function edittodo(e)
{
     var editText=e.parentNode.firstChild.nodeValue;
     var editValue=prompt("Enter Edit Value",editText);
     e.parentNode.firstChild.nodeValue=editValue;
}

function deleteall()
{
     todoitems.innerHTML="";
}