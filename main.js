const setHeihgt = document.getElementById("task_item");
var openInput = document.getElementsByClassName("add-content");
var input = document.getElementsByClassName("input-text")[0];

for (let index = 0; index < openInput.length; index++) {
    openInput[index].addEventListener("click", () => {
        if (input.style.display === "flex") {
            input.style.display = "none";
        } else {
            input.style.display = "flex";
            setHeihgt.style.height = "82%";
        }
    });
}
//add task
const inputBox = document.getElementById("input-box");
const taskAdd = document.getElementById("task_item");

function addTask(){
    if(inputBox.value ===''){
    alert("you must write something?");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskAdd.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
};

taskAdd.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checker");
        saveData();
    }
    else if(e.target.tagName =="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskAdd.innerHTML);
}
function showTasked(){
    taskAdd.innerHTML = localStorage.getItem("data");
}
showTasked();





