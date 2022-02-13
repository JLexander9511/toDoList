const d = document,
      w = window,
      $modeBtn = d.getElementById("themeBtn"),
      $mainElm = d.querySelector("main")

d.addEventListener("click", e =>{
    if(e.target.matches("#themeBtn *")) {
        $mainElm.classList.toggle("darkMode")
    }
})
      