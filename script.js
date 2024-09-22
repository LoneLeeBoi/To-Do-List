let addTaskBtn = document.getElementById("addTask");
let taskListUl = document.getElementById("taskList");

function saveData(){
    localStorage.setItem("data", taskListUl.innerHTML);
}

function loadData() {
    let storedData = localStorage.getItem("data");
    if (storedData) {
        taskListUl.innerHTML = storedData;

        taskListUl.querySelectorAll("li").forEach(taskLi => {
            taskLi.addEventListener('click', () => {
                taskLi.classList.toggle("checked");
                saveData();
            });

            taskLi.querySelector("span").addEventListener('click', () => {
                taskLi.remove();
                saveData();
            });
        });
    }
}
addTaskBtn.addEventListener('click', () => {
    let inputBox = document.getElementById("input-box");
    
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
    } else {
        let taskLi = document.createElement("li");
        taskLi.textContent = inputBox.value;
        saveData()
        
       
        taskLi.addEventListener('click', () => {
            taskLi.classList.toggle("checked");
            saveData()
        });
        
       
        let span = document.createElement("span");
        span.textContent = "\u00d7";  
     
        span.addEventListener('click', () => {
            taskLi.remove();
            saveData()
        });
        
        taskLi.appendChild(span);
        taskListUl.appendChild(taskLi);
    }
    
    inputBox.value = ""; 
    saveData()
});
loadData();

