function addTask() {
    const input = document.getElementById('input');
    const task = input.value.trim();   
    if (task !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = task;
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.style.margin = '10px';
        completeButton.style.backgroundColor = '#ca0c0c';
        completeButton.style.color = '#ddd8bc';
        completeButton.style.border = 'none';
        completeButton.style.borderRadius = '20px';
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
