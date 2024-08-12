const todoList = [];

function add(){
    const inputName = document.querySelector('.todo-input');
    const name = inputName.value;
    

    todoList.push(name);
    console.log(todoList);

    inputName.value = '';
}