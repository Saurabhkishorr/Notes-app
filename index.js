const button = document.querySelector(".btn");
const textarea =  document.querySelector(".row");
// const notes = document.querySelectorAll(".input-box")






function displayp(){
    const inputbox = document.createElement("p");
    const img = document.createElement("img");
    img.src = "delete.png";
    inputbox.className = "input-box";
    inputbox.setAttribute("contentEditable", "true");
    
    textarea.appendChild(inputbox).appendChild(img);
  
    // savedata()
    
}

textarea.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        savedata()
    }
    else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function () {
                savedata();
            }
        })
    }
})


function savedata() {
    localStorage.setItem("data", textarea.innerHTML);
}

function showdata() {
    textarea.innerHTML = localStorage.getItem("data");
}

showdata()

document.addEventListener("keydown",event =>{
    if (event.key === "Enter") {
        document.execCommand("insertlinebreak");
        event.preventDefault();
    }
})

// paragraph.contentEditable = true; 
    // paragraph.innerHTML = ` <img src="delete.png" alt=""> `