window.onscroll = function () {
  debugger;
  const myNav = document.getElementById("mynav");
  if (window.scrollY > 50) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

function loginFormSubmit(e) {
  e.preventDefault();
  document.getElementById("main_page").style.display = "none";
  document.getElementById("business_type_page").style.display = "block";
  document.getElementById("more_details_page").style.display = "none";
  document.getElementById("footer").style.display = "none";
}

function businessTypeDetails(e) {
  e.preventDefault();
  document.getElementById("main_page").style.display = "none";
  document.getElementById("business_type_page").style.display = "none";
  document.getElementById("more_details_page").style.display = "block";
  document.getElementById("footer").style.display = "none";
}

function addMoreDetails(e) {
  e.preventDefault();
  document.getElementById("main_page").style.display = "none";
  document.getElementById("business_type_page").style.display = "none";
  document.getElementById("more_details_page").style.display = "none";
  document.getElementById("footer").style.display = "none";
}

function updateBusinessType(node) {
  let btnList = document.getElementById("businessType_list");
  let allBtns = btnList.querySelectorAll("button");
  allBtns.forEach((btn) => {
    if (btn != node) {
      btn.classList.contains("active-business-type")
        ? btn.classList.remove("active-business-type")
        : null;
      const svg = btn.querySelector("svg");
      if (svg.getAttribute("fill") === "#ffffff") {
        svg.setAttribute("fill", "#6d6b6b");
      }
    }
  });
  node.classList.contains("active-business-type")
    ? node.classList.remove("active-business-type")
    : node.classList.add("active-business-type");
  let svg = node.querySelector("svg");
  if (svg.getAttribute("fill") === "#ffffff") {
    svg.setAttribute("fill", "#6d6b6b");
  } else {
    svg.setAttribute("fill", "#ffffff");
  }
}
