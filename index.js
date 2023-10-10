const inpu = document.querySelector(".inpu");
const btn = document.querySelector(".btn");

// Add task by pressing add button
btn.addEventListener("click",add)

// Add task by pressing enter
window.addEventListener("keydown",(e)=>{
    if(e.code == "Enter"){
        add();
    }
})

// ADD FUNCTION
function add(){
    if(inpu.value != ""){
        const ul = document.querySelector(".list");
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" class="check"> ${inpu.value} <button title="delete" class="del design">&#128465;</button>`;
        li.classList.add("items");
        ul.appendChild(li);
        inpu.value = "";
    }
}

//Delete button and checkbox for new elements
const ul = document.querySelector(".list");
ul.addEventListener("click",(e)=>{
    if(e.target.nodeName == "BUTTON"){
        e.target.parentNode.classList.add("remove");
    }
    if(e.target.nodeName == "INPUT"){
        if(e.target.checked){
            e.target.parentNode.classList.add("line");
        }
        else{
            e.target.parentNode.classList.remove("line");
        }
    }
})

//DELETE ALL BUTTON
const deleteAll = document.querySelector(".btn2");
deleteAll.addEventListener("click",()=>{
    const all = document.querySelectorAll("li");
    all.forEach((h)=>{
        h.classList.add("remove")
    })
})
