let addTodoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-list-container");

todoInput.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        addTodo();

    }
});
addTodoButton.addEventListener("click", function(){
    addTodo();
});

function addTodo(e){
    let todoInputValue = todoInput.value;
    if(todoInputValue){
        console.log(todoInputValue);
        todoInput.value = "";
    }
}
function appendTodo(todo){
    let todoItemDiv = document.createdElement("div");
    todoItemDive.classList.add("todo-item");
    let pTag = document.createElement("p");
    pTag.classList.add("todo-input");
    pTag.textContent = todo;
    let deleteTodoButton = document.createElement("button");
    deleteTodoButton.classList.add("delete-todo");
    delteteTodoButton.textContent = "Delete";
    console.log(todoItemDive);

    todoItemDiv.append(pTag);
    console.log(todoItemDiv);

    todoItemDiv.append(deleteTodoButton);
    console.log(todoItemDiv);
}