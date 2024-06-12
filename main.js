let todoInput = document.querySelector(".todo-input");
let todoBtn = document.querySelector(".todo-btn");
let todoList = document.querySelector(".todo-list");


todoBtn.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();

    let todoDiv = document.createElement("div");

    todoDiv.style.marginTop = "30px"

    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    todoDiv.appendChild(check);
    check.style.width = "20px"
    check.style.height = "20px"
    check.style.borderRadius = "30px"

    let text = document.createElement("li");
    text.innerHTML = todoInput.value;
    text.style.color = "black"
    text.style.listStyleType = "none"
    text.style.fontSize = "20px"
    todoDiv.appendChild(text)

    let btnTrash = document.createElement("button");
    btnTrash.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    btnTrash.style.border = "none"
    btnTrash.style.marginLeft = "320px"
    todoDiv.appendChild(btnTrash);
    todoList.appendChild(todoDiv)
    todoDiv.style.width = "455px"
    todoDiv.style.marginInline = "auto"
    todoDiv.style.display = "flex"
    todoDiv.style.justifyContent = "center"
    todoDiv.style.alignItems = "center"
    todoDiv.style.gap = "10px"

    btnTrash.addEventListener("click", function trash(event) {
        todoDiv.remove();
    })


}
