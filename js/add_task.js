import { taskPrinter } from "./main.js"

const d = document,
      w = window,
      $modalComponent = d.getElementById("modalFrame")

d.addEventListener("click", e => {
    if(e.target.matches(".addTaskBtn")){
        $modalComponent.classList.toggle("modalActive")
    }
    if(e.target.matches(".modalCancelBtn")){
        $modalComponent.classList.toggle("modalActive")
    }
})

export default function newTask(modalFrame, taskArray) {
    const $modal = d.querySelector(modalFrame), $taskTitle = d.getElementById("taskTitle"), $taskDesc = d.getElementById("taskDesc"), $submitBtn = d.getElementById("submitTask")

    $modal.addEventListener("click", e => {
        if (e.target.matches("#submitTask")) {
            taskArray.push({
                title: $taskTitle.value,
                description: $taskDesc.value
            })
            $modalComponent.classList.toggle("modalActive")
            $taskTitle.value = ''
            $taskDesc.value = ''
            taskPrinter(taskArray)
        }
    })
}
