const d = document,
      w = window
      
export default function stateBarFocus(stateBar){
    const $stateBarComp = d.getElementById(stateBar),
          $stateList = $stateBarComp.querySelector(".stateList"),
          $stateItems = $stateList.querySelectorAll(".stateItem")

        function clearStatus(){
            for (let index = 0; index < $stateItems.length; index++) {
                if($stateItems[index].classList.contains("itemActive"))
                      $stateItems[index].classList.remove("itemActive")
                      
            }
        }  
    $stateBarComp.addEventListener("click", e => {
        if (e.target === $stateList.children[0]) {
            clearStatus();
            $stateList.children[0].classList.add("itemActive")
        }
        if (e.target === $stateList.children[1]) {
            clearStatus();
            $stateList.children[1].classList.add("itemActive")
        }
        if (e.target === $stateList.children[2]) {
            clearStatus();
            $stateList.children[2].classList.add("itemActive")
        }
    })
          
}