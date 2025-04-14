const TaskContainer = document.getElementById('container-list');
var displayContent = document.getElementById('content');
var deleteContent = document.getElementById('delete');

let globalVariable = '';

const button = document.getElementById('button-86').addEventListener('click', () => {

    var taskValue = document.getElementById('input-text').value;

    if (taskValue === '') {

        alert('Input is Empty, please enter the your task first to save.');

    } else {

        const newTask = document.createElement('div');
        newTask.id = 'content';
        newTask.innerHTML = `
            <span>${taskValue}</span>
            <div class="delete">X</div>`;

        container_list.appendChild(newTask);

        document.getElementById('input-text').value = '';

        newTask.querySelector('.delete').addEventListener('click', () => {

            newTask.style.opacity = '0';
            newTask.style.transform = 'translate(-20px)';

            newTask.addEventListener('transitionend', () => {
                container_list.removeChild(newTask);
            });
        })

    }

});
