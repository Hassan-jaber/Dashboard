let lis = document.querySelectorAll("ul li");

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      let val = e.currentTarget.childNodes[1].childNodes[3].textContent;
      sessionStorage.setItem("current", val);
    });
  window.onload = _ => {

    lis.forEach((li) => { 
          if (
            li.childNodes[1].childNodes[3].textContent ===
            sessionStorage.getItem("current")
          ) {
            li.className = "active";
          }
    })

  };

  });

// Sticky Navigation Bar On Scroll

window.addEventListener("scroll", _ => {
  let head = document.querySelector(".head");
    head.classList.toggle("sticky",window.scrollY > 250);
})

// Start Script For Settings Page
let plans = document.querySelectorAll(".plans div")
plans.forEach((div) => {
  div.addEventListener("click", e => {
    plans.forEach((div) => {
      div.classList.remove("active-plane");
    })
    e.currentTarget.classList.add("active-plane");
  })
})
// End Script For Settings Page
