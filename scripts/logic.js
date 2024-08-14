const todoList = [];
let todoListHTML = '';

function add(){
    const inputName = document.querySelector('.todo-input');
    const name = inputName.value;
    

    todoList.push(name);
    console.log(todoList);

    inputName.value = '';

    for(let i = 0; i < todoList.length; i++){
        const html = `<p>${todoList[i]}</p>`;
        todoListHTML += html;
    }
}