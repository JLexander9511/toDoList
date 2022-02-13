import stateBarFocus from "./statebar.js"
import newTask from "./add_task.js"
import * as darkm from "./dark_mode.js"

const d = document,
      w = window,
      tasks = [],
      $taskUList = d.getElementById("taskList"),
      $adviseSpan = d.createElement("span"),
      $stateBarComp = d.getElementById("stateBar"),
      $stateList = $stateBarComp.querySelectorAll(".stateItem")
      

export function taskPrinter(taskArray){
    if(taskArray.length === 0){
        $taskUList.appendChild($adviseSpan)
        $adviseSpan.classList.add("noTasksSpan")
        $adviseSpan.textContent = "There's no tasks appointed now"
    }else{
        if ($taskUList.hasChildNodes()) {
            if($taskUList.children[0].nodeName === "SPAN"){
                $taskUList.removeChild($adviseSpan)
            }   
        }
        let ulHtml = ""
        const $listItem = d.createElement("li"),
              $doneCheck = d.createElement("input"),
              $taskText = d.createElement("span"),
              $deleteIcon = d.createElement("span"),
              icon = `&#128465;`
        for (const key in taskArray) {
                $taskUList.append($listItem)
                $listItem.append($doneCheck)
                $listItem.append($taskText)
                $listItem.append($deleteIcon)
                $deleteIcon.innerHTML = icon
                $deleteIcon.classList.add("delBtn")
                $doneCheck.setAttribute("type", "checkbox")
                $doneCheck.setAttribute("id", "checkBtn")
                $doneCheck.classList.add("checkButton")
                $taskText.textContent = taskArray[key].title + "    -    "  + taskArray[key].description
            /*let newLi = `<li><span>${taskArray[key].title}</span> - <span>${taskArray[key].description}</span></li>`
            ulHtml += newLi
            $taskUList.innerHTML = ulHtml*/
        }
        $taskUList.addEventListener("click", e => {
            if(e.target.matches("#checkBtn")){
                if ($doneCheck.checked === true) {
                    $taskText.classList.add("completedTask")
                    $listItem.setAttribute("data-completion", "")
                }
                if ($doneCheck.checked === false) {
                    $taskText.classList.remove("completedTask")
                    $listItem.removeAttribute("data-completion")
                }
            }
            if(e.target.matches(".delBtn")){
                const $actualLi = e.path[1]
                try {
                    $taskUList.removeChild($actualLi)
                } catch (error) {
                    console.warn("Ojo Piojo")
                }
                    
            }
        })
    }
}
      
d.addEventListener("DOMContentLoaded", e => {
    stateBarFocus("stateBar")
    newTask(".modalFrame", tasks)
    taskPrinter(tasks)
})

const $listItem = $taskUList.getElementsByTagName("li")

$stateBarComp.addEventListener("click", e => {
    if (e.target === $stateList[0]) {
        for (let i = 0; i < $listItem.length; i++) {
            if ($listItem[i].style.display = "none") {
                $listItem[i].style.display = "flex"
            }
            /*if($stateList[i].hasAttribute("data-completion")) {
                console.log("Completado")
            }*/
        }
    }
    if (e.target === $stateList[1]) {
        for (let i = 0; i < $listItem.length; i++) {
            if($listItem[i].hasAttribute("data-completion")){
                $listItem[i].style.display = "none"
            }else if($listItem[i].hasAttribute("data-completion") === false){
                $listItem[i].style.display = "flex"
            }
            /*if($stateList[i].hasAttribute("data-completion")) {
                console.log("Completado")
            }*/
        }
    }
    if (e.target === $stateList[2]) {
        for (let i = 0; i < $listItem.length; i++) {
            if($listItem[i].hasAttribute("data-completion") === false){
                $listItem[i].style.display = "none"
            }else if($listItem[i].hasAttribute("data-completion")){
                $listItem[i].style.display = "flex"
            }
            /*if($stateList[i].hasAttribute("data-completion")) {
                console.log("Completado")
            }*/
        }
    }
})