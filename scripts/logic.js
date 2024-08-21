const todoList = [{
        name: 'make dinner',
        date: '2022-12-22'
    },
    {
        name: 'wash car',
        date: '2024-05-12'
    }];

    

function displayTodoList(){

    let todoListHTML = '';

    /* todoList.forEach((todoObject, index) => {

    }) */

    for(let i = 0; i < todoList.length; i++){

        const value = todoList[i];
        const {name, date} = value;

        const output = `
            <div>${name}</div>
            <div>${date}</div>                      
            <button onclick="todo_delete(value)" class="delete-button">Delete</button>
            `;

        todoListHTML += output;
    }
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}


function todo_add(){
    const inputName = document.querySelector('.todo-input');
    const inputDate = document.querySelector('.todo-date');
    const name = inputName.value;
    const date = inputDate.value;
    
    todoList.push({
        name: name,
        date: date,
    });

    console.log(todoList)

    displayTodoList();

    inputName.value = '';
}

function todo_delete(index){
    todoList.splice(index, 1);
    displayTodoList();
}