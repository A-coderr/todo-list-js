const todoList = [{
    name: '',
    date: ''
}];

function displayTodoList(){

    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const value = todoList[i];

        //Shortcut for this line
        //const name = todoList.name;
        const {name} = todoList;
        const {date} = todoList;

        const output = `
            <
            <p>
            ${name} 
            ${date}
            <button onclick="delete(value)">Delete</button>
            </p>`;
        todoListHTML += output;
    }
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}


function add(){
    const inputName = document.querySelector('.todo-input');
    const inputDate = document.querySelector('.todo-date');
    const name = inputName.value;
    const date = inputDate.value;
    
    todoList.push({
        name: name,
        date: date,
    });

    displayTodoList();

    inputName.value = '';
}

function delete(index){
    todoList.splice(index, 1);
    displayTodoList();
}