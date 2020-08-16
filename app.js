
var todoitems=document.getElementById("todoitems");
function addtodo(){
    var todotext=document.getElementById("todo-input")
    
    var key=firebase.database().ref('todos').push().key;
    
     
    var todo={
         value:todotext.value,
         key:key
    }

    firebase.database().ref('todos').child(key).set(todo)

    todotext.value="";
    
}




function deleteall()
{
     todoitems.innerHTML="";
}



// extracting data from firebase

firebase.database().ref('todos').on('child_added',function(data){
 
    var list=document.createElement("li");
    var list_text=document.createTextNode(data.val().value);
    list.appendChild(list_text);
    todoitems.appendChild(list);
   
    var delbtn=document.createElement("button");
    var delbtn_text= document.createTextNode("Delete");
    delbtn.appendChild(delbtn_text);
    delbtn.setAttribute("class","btn btn-danger flt ");
    delbtn.setAttribute("onclick","tododel(this)");
    delbtn.setAttribute("id",data.val().key)
  

    var editbtn=document.createElement("button");
    var editbtn_text=document.createTextNode("Edit");
    editbtn.appendChild(editbtn_text);

    editbtn.setAttribute("class","btn btn-dark flt");
    editbtn.setAttribute("onclick","edittodo(this)");
    editbtn.setAttribute("id",data.val().key)
    list.appendChild(delbtn);
    list.appendChild(editbtn);
   
     
})


function tododel(e){
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.remove();
   }




   
function edittodo(e)
{
     var editText=e.parentNode.firstChild.nodeValue;
     var editValue=prompt("Enter Edit Value",editText);
     e.parentNode.firstChild.nodeValue=editValue;

     var todoedit={
          value:editValue,
          key:e.id
     }
     firebase.database().ref('todos').child(e.id).set(todoedit)
}