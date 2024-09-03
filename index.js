const textEL =document.getElementById("text")
const unorderedListEL =document.getElementById("unorderedList")

function addtast() {
    if(textEL.value === ''){
        alert("you must enter a task")
    }else{
        let li = document.createElement("li") //create eliment in document (html)
        li.innerHTML = textEL.value //the li element that have been created takes the textbox.value that weve already checked if its empty or not !!
        unorderedListEL.appendChild(li) //we appned the li(child) elemnet in the unordered list (parent) using ap
        let span = document.createElement("span")
         span.innerHTML = "\u00d7"
         
         li.append(span)
    }
textEL.value = ''
}
unorderedListEL.addEventListener("click" , function (e) {
    if(e.target.tagName === "LI"){
         e.target.classList.toggle("check")
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
     {
        
     } 
    }
} , false)