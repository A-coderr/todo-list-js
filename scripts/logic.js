const todoList = [];

function displayTodoList(){

    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const output = `<p>${todoList[i]}</p>`;
        todoListHTML += output;
    }
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}


function add(){
    const inputName = document.querySelector('.todo-input');
    const name = inputName.value;
    
    todoList.push(name);
    console.log(todoList);

    displayTodoList();

    inputName.value = '';
}