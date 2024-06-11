let todoInput = document.querySelector(".todo-input");
let todoBtn = document.querySelector(".todo-btn");
let todoList = document.querySelector(".todo-list");


todoBtn.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();

    let todoDiv = document.createElement("div");

    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    todoDiv.appendChild(check);
    check.style.width = "18px"
    check.style.height = "18px"

    let text = document.createElement("li");
    text.innerHTML = todoInput.value;
    text.style.color = "black"
    text.style.listStyleType = "none"
    todoDiv.appendChild(text)

    let btnTrash = document.createElement("button");
    btnTrash.style.border = "none"
    btnTrash.style.width = "18px"
    btnTrash.style.height = "18px"
    btnTrash.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(btnTrash);
    todoList.appendChild(todoDiv)
    todoDiv.style.marginLeft = "40px"
    todoDiv.style.display = "flex"
    todoDiv.style.gap = "10px"

    btnTrash.addEventListener("click", function trash(event) {
        todoDiv.remove();
    })

}



