const toDoForm = document.querySelector('.js-todoForm'),
      toDoInput = toDoForm.querySelector('input'),
      toDoList = document.querySelector('.js-todoList');

const TODOS_LS = 'toDos';


let toDos = [];



function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function filterFn(toDo){
        console.log(toDo.id, li.id)
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text){
    console.log(text);
    const li = document.createElement('li');
    const delBtn = document.createElement('a');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerText =  'x';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentVale = toDoInput.value;
    paintTodo(currentVale);
    toDoInput.value = '';
}



function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function (toDo) {
            paintTodo(toDo.text);
        });

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit)
}

init();