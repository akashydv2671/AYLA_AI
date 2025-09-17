function updateBusinessType(node){
    let btnList= document.getElementById("businessType_list");
    let allBtns= btnList.querySelectorAll("button");
    allBtns.forEach((btn)=>{
        if(btn != node){
        btn.classList.contains("active-business-type") ? btn.classList.remove("active-business-type") : null;
        const svg = btn.querySelector("svg");
        if (svg.getAttribute("fill") === "#ffffff") {
          svg.setAttribute("fill", "#6d6b6b"); 
        }
    }
    })
    node.classList.contains("active-business-type") ? node.classList.remove("active-business-type") : node.classList.add("active-business-type");;
    let svg = node.querySelector("svg");
    if (svg.getAttribute("fill") === "#ffffff") {
        svg.setAttribute("fill", "#6d6b6b"); 
    } else {
        svg.setAttribute("fill", "#ffffff");
    }
}