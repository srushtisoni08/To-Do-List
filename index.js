function addTask() {
    const input = document.getElementById('input');
    const task = input.value.trim();   
    if (task !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = task;
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
            doneList.appendChild(li); 
        };
        li.appendChild(completeButton); 
        taskList.appendChild(li); 
        input.value = ''; 
    }
}
