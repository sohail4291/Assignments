// let todoIndex = 1;
// function addItem(){
//     const element = document.getElementById("input");
//     const data = element.value;
//     if(data === ""){
//         return;
//     }

//     const newDiv = document.createElement("div");
//     newDiv.setAttribute("id","todo"+todoIndex);

//     const todoSpan = document.createElement("span");
//     todoSpan.innerHTML = data;
//     todoSpan.setAttribute("id","span"+todoIndex);

//     const todoDelete = document.createElement("button");
//     todoDelete.innerHTML = "Delete Item";
//     todoDelete.setAttribute("onclick","deleteItem("+todoIndex+")");

//     const todoEdit  = document.createElement("button");
//     todoEdit.innerHTML = "Edit item";
//     todoEdit.setAttribute("onclick","editItem("+todoIndex+")");

//     newDiv.appendChild(todoSpan);
//     newDiv.appendChild(todoDelete);
//     newDiv.appendChild(todoEdit);

//     const parentDiv = document.getElementById("todo");
//     parentDiv.appendChild(newDiv);
//     todoIndex += 1;
// }

// function deleteItem(index){
//     let element = document.getElementById("todo"+index);
//     element.parentElement.removeChild(element);
// }

// function editItem(index){
//     const element = document.getElementById("span"+index);
//     const data = element.textContent;
//     const newValue = prompt("Enter new data", data);
//     if(newValue != null){
//         element.textContent = newValue;
//     }

// }


let index = 1;
function addItem(){
    const element = document.getElementById("input");
    const data = element.value;

    if(data === ""){
        reuturn;
    }
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id",index);
    newDiv.classList.add("newDiv");

    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = data;
    todoSpan.setAttribute("id","span"+index);
    todoSpan.classList.add("text");


    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete item";
    deleteButton.setAttribute("onclick","deleteItem("+index+")");
    deleteButton.classList.add("delete-btn")

    const editButton = document.createElement("button");
    editButton.innerHTML = "edit button";
    editButton.setAttribute("onclick","editItem("+index+")");
    editButton.classList.add("edit-btn")

    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.classList.add("button-container")

    newDiv.appendChild(todoSpan);
    newDiv.appendChild(buttonContainer);
   
    const parentDiv = document.getElementById("todo");
    parentDiv.appendChild(newDiv);

    index += 1;
    element.value = "";
}
function deleteItem(index){
    const element = document.getElementById(index);
    element.parentElement.removeChild(element);
}
function editItem(index){
    const element = document.getElementById("span"+index);
    const data = element.textContent;
    const newdata = prompt("enter new data", data);
    element.textContent = newdata;
}