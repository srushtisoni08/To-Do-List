function addTask() {
    const input = document.getElementById('input');
    const task = input.value.trim();   
    if (task !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = task;

        const deletebutton = document.createElement('button');
        deletebutton.textContent= 'Delete';
        deletebutton.margin = '15px';
        deletebutton.style.backgroundColor = '#bd2c72';
        deletebutton.style.color = '#ffffff';
        deletebutton.style.border = 'none';
        deletebutton.style.borderRadius = '50px';
        deletebutton.style.cursor = 'pointer';
        deletebutton.style.fontFamily = 'bold';

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.style.margin = '15px';
        completeButton.style.backgroundColor = '#bd2c72';
        completeButton.style.color = '#ffffff';
        completeButton.style.border = 'none';
        completeButton.style.borderRadius = '50px';
        completeButton.style.cursor = 'pointer';
        completeButton.style.fontFamily = 'bold';
        completeButton.onclick = function() {
            const doneList = document.getElementById('done');
            li.removeChild(completeButton);
            li.removeChild(deletebutton); 
            doneList.appendChild(li); 
        };
        deletebutton.onclick = function () {
            taskList.removeChild(li); // Remove task from list
        };
        li.appendChild(completeButton); 
        li.appendChild(deletebutton);
        taskList.appendChild(li); 
        input.value = ''; 
    }
}
