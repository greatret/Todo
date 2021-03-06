input = document.querySelector('.input');
html = '';
taskId = 0;
tasklist = [];


function enter(e) {
    if (e.key === 'Enter') {
        formvalidate();
    }
}
main = document.querySelector('.task-container');
input.addEventListener('keydown', enter);

function deletetask(event) {
    console.log(event.path[0].id);
    localStorage.removeItem(event.path[0].id)
    document.getElementById(`${event.path[0].id}`).style.display = 'none';
}


function addtask() {
    console.log(input.value)
    taskId++;
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(time);
    html = `
             <div class="task" id=${taskId}>
                <div class="task-text">
                    ${input.value}
                </div>
                <div div class = "close-icon" id =${taskId} onclick = 'deletetask(event)' >
                    <i class="fa fa-times" aria-hidden="true" id=${taskId}></i>
                </div>
                <div class = "time">${time}</div>
            </div>
        `;
    localStorage.setItem(taskId, input.value)
    if (tasklist.length >= 0) {
        document.querySelector('.empty-message').classList.add('fade-out');
    }
    input.value = '';
    tasklist.push(taskId);
    main.innerHTML += html;
}


document.querySelector('.add-icon').addEventListener('click', formvalidate);





function formvalidate() {
    x = input.value;
    if (x == null || x == "") {
        document.querySelector('.input-alert').style.display = 'block';
        input.value = '';
    } else {
        document.querySelector('.input-alert').style.display = 'none';
        addtask();
    }
}

window.setInterval(alertpush, 1000);

function alertpush() {
    Push.create('Hello World!');
}